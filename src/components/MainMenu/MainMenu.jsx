import React from 'react';
import './MainMenu.css';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import LoginIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import { isLoggedIn } from '../../services/AuthService';

function logoutButton() {
  return (
    <Link to="/login" className="menuItem">
      <MenuItem>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText>
          Logout
        </ListItemText> 
      </MenuItem>
    </Link>
  );
}

const MainMenu = () => (
  <div>
    <Paper>
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
        { isLoggedIn() ? logoutButton() : '' }
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
      </MenuList>
    </Paper>
  </div>
);

export default MainMenu;
