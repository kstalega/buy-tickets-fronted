import React from 'react';
import jQuery from 'jquery';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import APIsConfig from '../../configs/api';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.tryToSignUp = this.tryToSignUp.bind(this);
    this.successfulSignUp = this.successfulSignUp.bind(this);
  }

  defaultState = {
    login: '',
    password: '',
    name: '',
    surname: '',
    phoneNumber: '',
  }

  handleInputChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  successfulSignUp() {
    this.setState({
      error: 'Error',
    });
  }

  tryToSignUp() {
    const apiEndpoint = APIsConfig.user.url + APIsConfig.user.login.url;
    const apiMethod = APIsConfig.user.login.method;
    jQuery.ajax({
      type: apiMethod,
      url: apiEndpoint,
      data: {
        email: 'markow@op.pl',
        name: 'Marcin',
        surname: 'Kowalski',
        phoneNumber: 888999000,
        hashPassword: 'HASLO1',
        userAccountStatus: 'normal',
        accountStatusChangeDate: '2018-05-08T20:15:35.350Z',
        salt: 'string',
        authToken: 'string',
        authTokenExpiration: '2018-05-08T20:15:35.350Z',
        permissionId: 0,
      },
      complete: this.successfulSignUp,
    });
  }

  render() {
    return (
      <Paper>
        <div className='container'>
          <h1>Sign up</h1>
          <div className='formEntity'>
            <TextField
              name='login'
              label='Login'
              onChange={this.handleInputChange}
              value={this.state.login}
            />
          </div>
          <div className='formEntity'>
            <TextField
              name='password'
              label='Password'
              type='password'
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </div>
          <div className='formEntity'>
            <TextField
              name='name'
              label='Name'
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          <div className='formEntity'>
            <TextField
              name='surname'
              label='Surname'
              onChange={this.handleInputChange}
              value={this.state.surname}
            />
          </div>
          <div className='formEntity'>
            <TextField
              name='phoneNumber'
              label='Phone number'
              onChange={this.handleInputChange}
              value={this.state.phoneNumber}
            />
          </div>
          <div className='formEntity'>
            <Button
              variant='raised'
              color='primary'
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
