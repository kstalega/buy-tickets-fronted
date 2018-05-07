import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      name: '',
      surname: '',
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
          <h1>Sign up</h1>
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
            <TextField
              name="name"
              label="Name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          <div className="formEntity">
            <TextField
              name="surname"
              label="Surname"
              onChange={this.handleInputChange}
              value={this.state.surname}
            />
          </div>
          <div className="formEntity">
            <Button
              variant="raised"
              color="primary"
              onClick={this.tryToSignUp}
            >
            Sign Up
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

export default SignUp;
