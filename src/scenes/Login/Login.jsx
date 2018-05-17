import React from 'react';
import jQuery from 'jquery';
import Paper from 'material-ui/Paper';
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import './Login.css';
import { setIdToken } from '../../services/AuthService';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'roblew@gmail.com',
      password: 'HASLO8',
      logged: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.tryToLogin = this.tryToLogin.bind(this);
    this.successfulLogin = this.successfulLogin.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  successfulLogin(response) {
    const idToken = response.Result;
    setIdToken(idToken);

    this.setState({
      login: '',
      password: '',
      logged: true,
    });
  }

  tryToLogin() {
    jQuery.ajax({
      type: 'POST',
      url: `http://usersrestmicroservice.azurewebsites.net/api/Authentication/${this.state.login}/${this.state.password}`,
      data: {
        login: 'test',
      },
      dataType: 'json',
      success: this.successfulLogin,
    });
  }

  render() {
    return !this.state.logged ? (
      <Paper>
        <div className="container">
          <h1>Login</h1>
          <div className="formEntity">
            <TextField
              name="login"
              label="Login"
              onChange={this.handleInputChange}
              value={this.state.login}
            />
          </div>
          <div className="formEntity">
            <TextField
              name="password"
              label="Password"
              type="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </div>
          <div className="formEntity">
            <Button
              variant="raised"
              color="primary"
              onClick={this.tryToLogin}
            >
              Sign in
            </Button>
          </div>
        </div>
      </Paper>
    ) : (<Redirect to={{ pathname: '/' }} />);
  }
}


export default Login;
