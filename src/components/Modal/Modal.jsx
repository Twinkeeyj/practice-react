import React, { Component } from 'react';
import classes from './Modal.module.css';

export default class Modal extends Component {
  modal = e => {
    if (e.code === 'Escape') {
      this.props.modalToggle();
    }
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.modal);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.modal);
  };

  render() {
    return (
      <div className={classes.overlay} id="overlay">
        <div className={classes.modal}>{this.props.children}</div>
      </div>
    );
  }
}
