import React from 'react';
import { 
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
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

class PrivateRoute extends React.Component {
  render() {
    const { 
      component: Component, 
      neededpermission: neededPermission = 0,
      logged,
      ...rest 
    } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (logged && hasUserEnoughPermissionLevel(neededPermission)) {
            return (<Component {...props} />);
          } else if (isLoggedIn()) {
            return notEnoughPermissionLevel();
          }    
          return RedirectToLogin(props);
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { logged } = state.auth;

  return {
    logged,
  };
};

export default connect(
  mapStateToProps,
  {},
)
(PrivateRoute);
