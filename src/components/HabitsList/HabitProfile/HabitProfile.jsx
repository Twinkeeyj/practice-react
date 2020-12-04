import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Routes from '../../../routes';
import Modal from '../../Modal/Modal';
import HabitForm from '../../HabitsList/HabitForm/HabitForm';

export default class HabitProfile extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <header>
          <NavLink to={Routes.HabitsList}>Назад</NavLink>
          <h2>title</h2>
          <button type="button">Править</button>
        </header>

        {this.props.showModal && (
          <Modal modalToggle={this.props.modalToggle}>
            <HabitForm
              modalToggle={this.props.modalToggle}
              toAddHabit={this.toAddHabit}
            />
          </Modal>
        )}
      </>
    );
  }
}
