import React from 'react';
import { Route } from 'react-router-dom';
import MainMenu from '../MainMenu/MainMenu';
import Home from '../../scenes/Home/Home';
import Login from '../../scenes/Login/Login';
import Restricted from '../../scenes/Restricted/Restricted';
import SignUp from '../../scenes/SignUp/SignUp';
import EventsList from '../../scenes/EventsList/EventsList';
import CreateEvent from '../../scenes/CreateEvent/CreateEvent';

const ScenesContainer = () =>
  (
    <div className="container">
      <MainMenu />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/restricted" component={Restricted} />
      <Route path="/events/show" component={EventsList} />
      <Route path="/events/create" component={CreateEvent} />
    </div>
  );

export default ScenesContainer;
