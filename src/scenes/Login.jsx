import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const Login = () =>
  (
    <div className="container">
      <Paper>
        <h1>Login</h1>
        <div>
          <TextField floatingLabelText="Login" />
        </div>
        <div>
          <TextField floatingLabelText="Password" type="password" />
        </div>
      </Paper>
    </div>
  );

export default Login;
