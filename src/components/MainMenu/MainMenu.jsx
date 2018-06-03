import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './MainMenu.css';
import { tryToLogoutUser, getUserInfoByID } from '../../actions';
import { getUserInfo } from '../../services/AuthService';
import PrivateElement from '../PrivateElement';

function userInfo() {
  const user = getUserInfo();
  if (user.permissionId === 1) {
    return (
      <div className="userInfo">You're logged as an Administrator</div>
    );
  }

  return (
    <div className="userInfo">You're logged as an Regular User</div>
  );
}

class MainMenu extends React.Component {
  componentDidMount() {
    if (this.props.logged) {
      const user = getUserInfo();
      this.props.getUserInfoByID(user.userId);
    }
  }

  renderUserArea() {
    if (!this.props.logged) {
      return (
        <ul className="nav navbar-nav navbar-right userArea">
          <li><span><Link to="/login" className="btn btn-info log">Log in</Link></span></li>
          <li><span><Link to="/signup" className="btn btn-success log">Sign up</Link></span></li>
        </ul>
      );
    }

    return (
      <ul className="nav navbar-nav navbar-right userArea">
        <li>{ userInfo() }</li>
        <li><button className="btn btn-danger log" onClick={() => this.props.tryToLogoutUser()}>Logout</button></li>
      </ul>
    );
  }

  render() {
    return (
      <div className="col-sm-12">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Buy tickets</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Start</Link>
            </li>
            <PrivateElement neededpermission="0">
              <li>
                <Link to="/events/show">Events</Link>
              </li>
            </PrivateElement>
            <PrivateElement neededpermission="1">
              <li>
                <Link to="/events/create">Add event</Link>
              </li>
            </PrivateElement>
            <PrivateElement neededpermission="1">
              <li>
                <Link to="/orders/all">All orders</Link>
              </li>
            </PrivateElement>
            <PrivateElement neededpermission="0">
              <li>
                <Link to="/orders/my">My orders</Link>
              </li>
            </PrivateElement>
          </ul>
          { this.renderUserArea() }
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged,
  };
};

export default connect(
  mapStateToProps,
  {
    tryToLogoutUser,
    getUserInfoByID,
  }
)(MainMenu);
