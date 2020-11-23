import React from 'react';
import classes from './Registration.module.css';

const Registration = function () {
  return (
    <>
      <div className={classes.header}>
        <button type="button" className={classes.toBeck}>
          Назад
        </button>
      </div>
      <form action="submit" className={classes.form}>
        <label htmlFor="userName">Імя</label>
        <input name="userName" placeholder="Імя" />
        <label htmlFor="userSurname">Фамілія</label>
        <input name="userSurname" placeholder="Фамілія" />
        <label htmlFor="userPhone">Номер телефону</label>
        <input type="tel" name="userPhone" placeholder="+380" />
        <input type="submit" value="Далі" />
      </form>
    </>
  );
};
export default Registration;
