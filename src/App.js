import React, { Component } from 'react';
import Authentication from './components/Authentication/Authentication';
import Loginization from './components/Loginization/Loginization';
import Registration from './components/Registration/Registration';
import Profile from "./components/Profile/Profile"

export default class App extends Component {
  render() {
    return (
      <>
        <Authentication />
        <Loginization />
        <Registration />
        <Profile/>
      </>
    );
  }
}
