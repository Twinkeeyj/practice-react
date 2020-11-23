import React, { Component } from 'react';
import classes from "./Authentication.module.css"

// import Loginization from "../Loginization/Loginization"
// import Registration from "../Registration/Registration"

export default class Authentication extends Component {
  state = {
    user: [{ name: 'Vlad', surname: 'Suprunenko', number: '+380911111111' }],
  };

  onBtnClick = e => {
    if (e.target.textContent === 'Вхід') {
      console.log('login');
    } else {
      console.log('register');
    }
  };

  render() {
    return (
      <>
        <section>
          <button type="button" onClick={this.onBtnClick}>
            Вхід
          </button>
          <button type="button" onClick={this.onBtnClick}>
            Створити акаунт
          </button>
        </section>
      </>
    );
  }
}
