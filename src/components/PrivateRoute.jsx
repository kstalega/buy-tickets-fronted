import React from 'react';
import { 
  Route,
  Redirect,
} from 'react-router-dom';
import { isLoggedIn, hasUserEnoughPermissionLevel } from '../services/AuthService';

function RedirectToLogin(props) {
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: props.location },
      }}
    />
  );
}

function notEnoughPermissionLevel() {
  return (
    <div className="col-sm-12">
      <div className="panel panel-default">
        <div className="panel-body">
          <div>You have not enough permission level</div>
        </div>
      </div>
    </div>
  );
}

const PrivateRoute = ({ component: Component, neededpermission: neededPermission = 0, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isLoggedIn() && hasUserEnoughPermissionLevel(neededPermission)) {
        return (<Component {...props} />);
      } else if (isLoggedIn()) {
        return notEnoughPermissionLevel();
      }    
      return RedirectToLogin(props);
    }}
  />
);

export default PrivateRoute;