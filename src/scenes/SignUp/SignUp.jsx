import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { tryToSignUpUser } from '../../actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.tryToSignUp = this.tryToSignUp.bind(this);
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

  tryToSignUp() {
    this.props.tryToSignUpUser({
      login: this.state.login,
      password: this.state.password,
    });
  }

  render() {
    return (
      <Paper>
        <div className='container'>
          <h1>Sign up</h1>
          <div>
            { this.props.signUpStarted ? 'Please wait, we attempt to creat your account' : '' }
          </div>
          <div>
            {
              this.props.message ? this.props.message : ''
            }
          </div>
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

const mapStateToProps = (state) => {
  return {
    signUpStarted: state.auth.signUpStarted,
    message: state.auth.message,
  };
};

export default connect(mapStateToProps, { tryToSignUpUser })(SignUp);
