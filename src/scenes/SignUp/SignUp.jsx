import React from 'react';
import { connect } from 'react-redux';
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
      <div className="container">
        <h1>Sign up</h1>
        <div>
          { this.props.signUpStarted ? 'Please wait, we attempt to creat your account' : '' }
        </div>
        <div>
          { this.props.message ? this.props.message : '' }
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Login"
            name="login"
            onChange={this.handleInputChange}
            value={this.state.login}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Surname"
            name="surname"
            onChange={this.handleInputChange}
            value={this.state.surname}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Phone number"
            name="phoneNumber"
            onChange={this.handleInputChange}
            value={this.state.phoneNumber}
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.tryToSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
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
