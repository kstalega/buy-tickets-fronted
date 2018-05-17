import React from 'react';
import './MainMenu.css';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import LoginIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import { isLoggedIn, logout, getUserInfo } from '../../services/AuthService';

function logoutButton() {
  return (
    <MenuItem onClick={() => logout()} style={{ backgroundColor: 'rgba(255,0,0,.5)' }}>
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

const MainMenu = () => (
  <div>
    <Paper>
      { isLoggedIn() ? userInfo() : '' }

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
          !isLoggedIn() ? 
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
        { isLoggedIn() ? logoutButton() : '' }
        { isLoggedIn() ? restricted() : '' }
      </MenuList>
    </Paper>
  </div>
);

export default MainMenu;
