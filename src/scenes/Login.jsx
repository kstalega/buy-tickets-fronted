import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const Login = () =>
  (
    <div className="container">
      <Paper>
        <h1>Login</h1>
        <div>
          <TextField label="Login" />
        </div>
        <div>
          <TextField label="Password" type="password" />
        </div>
      </Paper>
    </div>
  );

export default Login;
