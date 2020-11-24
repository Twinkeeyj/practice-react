import React, { Component } from 'react';
import ProTypes from 'prop-types';
import HabitItem from './HabitsItem/HabitsItem';

export default class HabitsList extends Component {
  static proTypes = {
    prop: PropTypes,
  };
  state = {
    habits: [{ id: '1', title: 'zarydka', startDate: '', progress: '' }],
  };
  toSetProgress=(satrtData)=>{
    // (currentData-startData)*100/21
    const dateNow=Date.now()
    const
    const progress=Math.round((dateNow-startData)*100/(21*24*60*60*1000))
    return progress
  }
  toChangeProgress = (id) => {
    this.setState(prefState => {
        const obj= prevState.habits.find(habit=>{
         return habit.id===id
        })
        obj.progress=this.toSetProgress(obj.startDate)
        return (obj)
    });
  };
  render() {
    const {habits}=this.state
    return (
      <>
        <header>
          <div>My accaunt</div>
          <button type="button"></button>
        </header>
        <div>Календар</div>
        <h1>Мої звичкі</h1>
        {this.habits.length ?
        <ul>
           {habits.map(habit=>{return <HabitItem key={habit.id} progress={()=>thid.toChangeProgress(habit.id)}/>})}
          </ul>
           : <p>У вас покі немає звичок</p>}
        <button type="button"></button>
      </>
    );
  }
}
