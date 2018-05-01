import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0'
};

const MainMenu = () => (
  <div>
    <Paper style={style}>
      <Menu>
        <MenuItem leftIcon={<AccountCircle />}>
          <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
      </Menu>
    </Paper>
  </div>
);

export default MainMenu;
