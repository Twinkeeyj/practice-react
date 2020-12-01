import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Authentification from './components/Authentification/Authentification.js';
import Loginization from './components/Loginization/Loginization';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile.js';
import Modal from './components/Modal/Modal';
import HabitsList from './components/HabitsList/HabitsList';

import HabitForm from './components/HabitsList/HabitForm';

export default class App extends Component {
  state = {
    user: [{}],
    showModal: false,
  };

  modalToggle = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  render() {
    return (
      <>
        <Route path="/" exact component={Authentification} />
        <Route path="/registr" exact component={Registration} />
        <Route path="/login" exact component={Loginization} />
        <Route path="/profile" exact component={Profile} />
        <Route
          path="/profile/habitList"
          exact
          render={props => (
            <HabitsList
              {...props}
              showModal={this.state.showModal}
              modalToggle={this.modalToggle}
            />
          )}
        />
        {/* <HabitsList showModal={this.state.showModal} modalToggle={this.modalToggle}  /> */}
      </>
    );
  }
}
