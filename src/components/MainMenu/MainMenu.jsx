import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './MainMenu.css';
import { tryToLogoutUser } from '../../actions';
import { getUserInfo } from '../../services/AuthService';

function userInfo() {
  const user = getUserInfo();
  return (
    <div>Logged as: { user.userName }</div>
  );
}

class MainMenu extends React.Component {

  renderUserArea() {
    if (!this.props.logged) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/login" className="btn btn-info log">Log in</Link></li>
          <li><Link to="/signup" className="btn btn-success log">Sign up</Link></li>
        </ul>
      );
    }

    return (
      <ul className="nav navbar-nav navbar-right">
        <li>{ userInfo() }</li>
        <li><button className="btn btn-danger log" onClick={() => this.props.tryToLogoutUser()}>Logout</button></li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Buy tickets</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/events/show">Events</Link>
          </li>
        </ul>
        { this.renderUserArea() }
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged,
  };
};

export default connect(mapStateToProps, {
  tryToLogoutUser,
})(MainMenu);
