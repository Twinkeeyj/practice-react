import React, { Component } from "react";
import Loginization from "../Loginization/Loginization.js";
import Registration from "../Registration/Registration.js";
import {NavLink} from "react-router-dom"
import classes from "./Authentification.module.css"

export default class Authentification extends Component {
  state = {
    users: [
      {
        name: "Petro",
        surname: "Pipka",
        phone: "+380631111111",
      },
    ],
  };

  // onBtnClick = (e) => {
  //   if (e.target.textContent === "Вход") {
  //     return <Loginization />;
  //   } else {
  //     return <Registration />;
  //   }
  // };

  render() {
    return (
      <>
        <section>
         <NavLink to="/login"className="link">
           Вхід
         </NavLink>
         <NavLink to="/registr"className="link">
           Створить акаунт
         </NavLink>
        </section>
      </>
    );
  }
}


{/* <button type="button" onClick={this.onBtnClick}>
Вход
</button>
<button type="button" onClick={this.onBtnClick}>
Создать аккаунт
</button> */}