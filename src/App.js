import React, { Component } from 'react';
import './App.css';
import Authentification from './components/Authentification/Authentification.js';
import Loginization from './components/Loginization/Loginization';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile.js';
import Modal from './components/Modal/Modal';
import HabitsList from './components/HabitsList/HabitsList';

import HabitForm from './components/HabitsList/HabitForm';

export default class App extends Component {
  state = {
    showModal: false,
  };
  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  render() {
    return (
      <>

        <Authentification />
        <Loginization />
        <Registration />
        <Profile />
        <HabitsList showModal={this.state.showModal} modalToggle={this.modalToggle}  />
      </>
    );
  }
}
