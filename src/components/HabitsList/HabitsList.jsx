import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HabitItem from './HabitItem/HabitItem';
import Modal from '../Modal/Modal';
import HabitForm from '../HabitsList/HabitForm/HabitForm';
import { NavLink } from 'react-router-dom';
import Routes from "../../routes"

export default class HabitsList extends Component {
  state = {
    habits: [],
  };
  componentDidMount() {
    const array = JSON.parse(localStorage.getItem('state')) || [];
    this.setState({ habits: array });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('state', JSON.stringify(this.state.habits));
    }
  }
  toAddHabit = habit => {
    this.setState(prevState => ({
      habits: [...prevState.habits, habit],
    }));
  };

  toChangeProgress = id => {
    this.setState(prevState => {
      const obj = prevState.habits.find(habit => {
        return habit.id === id;
      });
      obj.progress = this.toSetProgress(obj.startDate);
      return obj;
    });
  };

  render() {
    const { habits } = this.state;
    return (
      <>
        <header>
          <div>Мой аккаунт</div>
          <NavLink to="/">Назад</NavLink>
          {/* <button type="button">x</button> */}
        </header>
        {this.props.showModal && (
          <Modal modalToggle={this.props.modalToggle}>
            <HabitForm
              modalToggle={this.props.modalToggle}
              toAddHabit={this.toAddHabit}
            />
          </Modal>
        )}
        <div>Календарь</div>
        <h1>Мои привычки</h1>
        {this.state.habits.length ? (
          <ul>
            {habits.map(habit => {
              return (
                <NavLink to={`${Routes.HabitsList}/${habit.id}`}>
                <HabitItem
                  key={habit.id}
                  progress=""
                  // progress={() => this.toChangeProgress(habit.id)}
                  title={habit.title} id={habit.id}
                />
                </NavLink>
              );
            })}
          </ul>
        ) : (
          <p>У вас пока нету привычек Нажмите +, чтобы добавить первую</p>
        )}
        <button type="button" onClick={this.props.modalToggle}>
          +
        </button>
      </>
    );
  }
}
