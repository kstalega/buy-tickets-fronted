import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import './Login.css';

const Login = () =>
  (
    <div className="container">
      <Paper>
        <h1>Login</h1>
        <div className="formEntity">
          <TextField label="Login" />
        </div>
        <div className="formEntity">
          <TextField label="Password" type="password" />
        </div>
        <div className="formEntity">
          <Button variant="raised" color="primary">
            Sign in
          </Button>
        </div>
      </Paper>
    </div>
  );

export default Login;
