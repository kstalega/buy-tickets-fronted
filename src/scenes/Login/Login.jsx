import React from 'react';
import jQuery from 'jquery';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogged } from '../../actions';
import './Login.css';
import { setIdToken } from '../../services/AuthService';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'roblew@op.pl',
      password: 'HASLO1',
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
    if (response.Success) {
      const idToken = response.Result;
      setIdToken(idToken);

      this.setState({
        login: '',
        password: '',
        logged: true,
      });

      this.props.userLogged();
    }
  }

  tryToLogin() {
    jQuery.ajax({
      type: 'POST',
      url: `http://usersmicroservice.azurewebsites.net/api/Authentication/${this.state.login}/${this.state.password}`,
      data: {
        login: 'test',
      },
      dataType: 'json',
      success: this.successfulLogin,
    });
  }

  render() {
    return !this.state.logged ? (
      <div className="container">
        <h1>Login</h1>
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
          <button
            type="button"
            className="btn btn-success"
            onClick={this.tryToLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    ) : (<Redirect to={{ pathname: '/' }} />);
  }
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged,
  };
};

export default connect(mapStateToProps, {
  userLogged,
})(Login);
