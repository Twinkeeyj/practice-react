import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Profile.module.css';

class Profile extends Component {
  state = {
    avatar: '',
    height: '',
    weight: '',
    birthDate: '',
  };

  handleOnChange = event => {
    const name = event.target.name;
    this.setState({ [name]: name.value });
  };
  handleOnSubmit = e => {
    e.preventDefault();

    // ???
    this.setState({ avatar: '', height: '', weight: '', birthDate: '' });
  };

  render() {
    return (
      <>
        <button type="button"></button>
        <form action="" className={classes.form} onSubmit={this.handleOnSubmit}>
          <label>
            Змінти фото
            <input
              type="text"
              value={this.state.avatar}
              name="avatar"
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Зріст
            <input
              type="text"
              value={this.state.height}
              name="height"
              onChange={this.handleOnChange}
              placeholder="170cm"
            />
          </label>
          <label>
            Вага
            <input
              type="text"
              value={this.state.weight}
              name="weight"
              onChange={this.handleOnChange}
              placeholder="170kg"
            />
          </label>
          <label>
            Дата народження
            <input
              type="text"
              value={this.state.birthDate}
              name="birthDate"
              onChange={this.handleOnChange}
              placeholder="Рік"
            />
          </label>
          <label>
            Створити
            <input type="submit" />
          </label>
        </form>
      </>
    );
  }
}
export default Profile;
