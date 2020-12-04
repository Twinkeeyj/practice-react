import React from "react";
import PropTypes from "prop-types";
//import styles from './HabitItem.styles';
import { NavLink } from 'react-router-dom';

const HabitItem = ({ title, progress, id }) => (
  <li>
    <h3>{title}</h3>
    <div>{progress}%</div>
  </li>
);

export default HabitItem;
