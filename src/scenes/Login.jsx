import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        login: '',
        password: '',
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
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
            />
          </div>
          <div className="formEntity">
            <TextField
              name="password"
              label="Password"
              type="password"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="formEntity">
            <Button variant="raised" color="primary">
              Sign in
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}


export default Login;
