import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HabitForm.module.css';
import { v4 as uuidv4 } from 'uuid';

export default class HabitForm extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    title: '',
    comment: '',
    repeat: '',
    color: '#FF7E00',
    remind: true,
  };
  closeId = null;

  handeSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
    const { title } = this.state;
    const habit = {
      id: uuidv4(),
      title: title,
      startData: Date.now(),
      progress: this.toSetProgress(Date.now()),
    };
    this.props.toAddHabit(habit);
    this.setState({
      title: '',
      comment: '',
      repeat: '',
      color: '#FF7E00',
      remind: true,
    });
    alert(`Звичка додана ${title}`);
    this.closeId = setTimeout(this.props.modalToggle, 800);
  };
  componentWillUnmount = () => {
    clearTimeout(this.closeId);
  };

  handeChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };
  toSetProgress = startDate => {
    const dateNow = Date.now();
    const progress = Math.round(
      ((dateNow - startDate) * 100) / (21 * 24 * 60 * 1000),
    );
    return progress;
  };

  render() {
    const { title, comment, repeat, color, remind } = this.state;
    return (
      <div>
        <form action="" onSubmit={this.handeSubmit}>
          <div
            className={styles.headerWrapper}
            style={{ backgroundColor: this.state.color }}
          >
            <button type="button" onClick={this.props.modalToggle}>
              X
            </button>
            <h2>Новая привычка</h2>
            <label htmlFor="title">Название</label>
            <input
              name="title"
              type="text"
              value={title}
              placeholder="Зарядка"
              onChange={this.handeChange}
            />
          </div>

          <label htmlFor="comment">Мотивируй себя</label>
          <input
            name="comment"
            type="textarea"
            placeholder="..."
            value={comment}
            onChange={this.handeChange}
          />

          <label htmlFor="repeat"></label>
          <select name="repeat" value={repeat} onChange={this.handeChange}>
            <option value="Каждый день">Каждый день &#5171;</option>
            <option value="Каждый час">Каждый час &#5171;</option>
          </select>

          <label htmlFor="color"></label>
          <input
            type="color"
            name="color"
            value={color}
            onChange={this.handeChange}
          />

          <label htmlFor="remind"></label>
          <input
            type="checkbox"
            name="remind"
            checked={remind}
            onChange={this.handeChange}
          />

          <button type="submit" onSubmit={this.handeSubmit}>
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}
