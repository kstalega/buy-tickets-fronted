import React from 'react';
import jQuery from 'jquery';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
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

  successfulLogin() {
    this.setState({
      login: '',
      password: '',
    });
  }

  tryToLogin() {
    jQuery.ajax({
      type: 'POST',
      url: `http://usersrestmicroservice.azurewebsites.net/api/Authentication/${this.state.login}/${this.state.password}`,
      data: {
        login: 'test',
      },
      complete: this.successfulLogin,
    });
  }

  render() {
    return (
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
    );
  }
}


export default Login;
