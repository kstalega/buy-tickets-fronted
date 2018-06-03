import React from 'react';
import { 
  Route 
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import MainMenu from '../MainMenu/MainMenu';
import Home from '../../scenes/Home/Home';
import Login from '../../scenes/Login/Login';
import Restricted from '../../scenes/Restricted/Restricted';
import SignUp from '../../scenes/SignUp/SignUp';
import EventsList from '../../scenes/EventsList/EventsList';
import CreateEvent from '../../scenes/CreateEvent/CreateEvent';
import ShowOrders from '../../scenes/ShowOrders/ShowOrders';
import ShowUserOrders from '../../scenes/ShowUserOrders/ShowUserOrders';
import SingleEvent from '../../scenes/SingleEvent/SingleEvent';

const ScenesContainer = () =>
  (
    <div className="container">
      <MainMenu />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/restricted" component={Restricted} />
      <PrivateRoute path="/events/show" component={EventsList} neededpermission="0" />
      <PrivateRoute path="/events/create" component={CreateEvent} neededpermission="1" />
      <PrivateRoute path="/orders/all" component={ShowOrders} neededpermission="1" />
      <PrivateRoute path="/orders/my" component={ShowUserOrders} neededpermission="0" />
      <PrivateRoute path="/event/:eventID" component={SingleEvent} neededpermission="0" />
    </div>
  );

export default ScenesContainer;
