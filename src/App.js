import React, { lazy, Component, Suspense } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import { Redirect, Route, Switch } from 'react-router-dom';
import HabitsList from './components/HabitsList/HabitsList';
import routes from './routes';
import HabitForm from './components/HabitsList/HabitForm';
// import HabitProfile from "./components/HabitsList/HabitProfile/HabitProfile"

const AsynkAuthentification = lazy(() =>
  import('./components/Authentification/Authentification.js'),
);
const AsynkRegistration = lazy(() =>
  import('./components/Registration/Registration'),
);
const AsynkLoginization = lazy(() =>
  import('./components/Loginization/Loginization'),
);
const AsynkProfile = lazy(() => import('./components/Profile/Profile.js'));
const AsynkHabitProfile = lazy(() =>
  import('./components/HabitsList/HabitProfile/HabitProfile.jsx'),
);

// const AsynkHabitsList = lazy(() => import('./components/HabitsList/HabitsList'));

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
    console.log(this.state);
    return (
      <>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Route
            path={routes.Authentification}
            exact
            component={AsynkAuthentification}
          />
          <Route path={routes.Registration} component={AsynkRegistration} />
          <Route path={routes.Loginization} component={AsynkLoginization} />
          <Route path={routes.Profile} exact component={AsynkProfile} />
          <Route
            path={routes.HabitsList}
            exact
            render={props => (
              <HabitsList
                {...props}
                showModal={this.state.showModal}
                modalToggle={this.modalToggle}
              />
            )}
          />
          <Route
            path={routes.HabitProfile}
            exact
            render={props => (
              <AsynkHabitProfile
                {...props}
                showModal={this.state.showModal}
                modalToggle={this.modalToggle}
              />
            )}
          />
        </Suspense>
        {/* <HabitsList showModal={this.state.showModal} modalToggle={this.modalToggle}  /> */}
      </>
    );
  }
}
