import React from 'react';
import classes from './Loginization.module.css';

const Loginization = function () {
  return (
    <>
      <div className={classes.header}>
        <button type="button" className={classes.toBeck}>
          Назад
        </button>
      </div>
      <form action="submit" className={classes.form}>
        <label htmlFor="userPhone">Номер телефону</label>
        <input type="tel" name="userPhone" placeholder="+380" />
        <input type="submit" value="Далі" />
      </form>
    </>
  );
};
export default Loginization;
