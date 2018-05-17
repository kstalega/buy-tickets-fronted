import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import LoginIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import './MainMenu.css';
import { tryToLogoutUser } from '../../actions';
import { getUserInfo } from '../../services/AuthService';

function logoutButton(logoutFunc) {
  return (
    <MenuItem onClick={() => logoutFunc()} style={{ backgroundColor: 'rgba(255,0,0,.5)' }}>
      <ListItemIcon>
        <LoginIcon />
      </ListItemIcon>
      <ListItemText>
        Logout
      </ListItemText>
    </MenuItem>
  );
}

function restricted() {
  return (
    <Link to="/restricted" className="menuItem">
      <MenuItem>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText>
          Restricted
        </ListItemText> 
      </MenuItem>
    </Link>
  );
}

function userInfo() {
  const user = getUserInfo();

  return (
    <div style={{ padding: '10px', backgroundColor: 'rgba(255,128,64,.5)' }}>
      Logged as: { user.userName }
      <br />
      <br />
    </div>
  )
}

const MainMenu = props => (
  <div>
    <Paper>
      { props.logged ? userInfo() : '' }

      <MenuList>
        <Link to="/" className="menuItem">
          <MenuItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText> 
          </MenuItem>
        </Link>
        {
          !props.logged ?
          (
            <div>
              <Link to="/login" className="menuItem">
                <MenuItem>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Login
                  </ListItemText> 
                </MenuItem>
              </Link>
              <Link to="/signup" className="menuItem">
                <MenuItem>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Sign Up
                  </ListItemText> 
                </MenuItem>
              </Link>
            </div>
          )
          :
          ''
        }


        <Link to="/events/show" className="menuItem">
          <MenuItem>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText>
              Show events
            </ListItemText> 
          </MenuItem>
        </Link>
        { props.logged ? logoutButton(props.tryToLogoutUser) : '' }
        { props.logged ? restricted() : '' }
      </MenuList>
    </Paper>
  </div>
);

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged,
  };
};

export default connect(mapStateToProps, {
  tryToLogoutUser,
})(MainMenu);
