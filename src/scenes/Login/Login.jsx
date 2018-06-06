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
      loginInProgess: false,
      message: '',
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
    // login was sucessfull
    if (response.Success) {
      const idToken = response.Result;
      setIdToken(idToken);

      this.setState({
        login: '',
        password: '',
        logged: true,
        loginInProgess: true,
      });

      this.props.userLogged();
    // something went wrong, authorization server returned info about it
    } else {
      this.setState({
        loginInProgess: false,
        message: `${response.MessageContainer.Message}: ${response.MessageContainer.Details}`,
      });
    }
  }

  tryToLogin() {
    this.setState({
      loginInProgess: true,
      message: '',
    });

    jQuery.ajax({
      type: 'POST',
      url: `https://gateway20180604014740.azurewebsites.net/api/Authentication/${this.state.login}/${this.state.password}`,
      data: {
        login: 'test',
      },
      dataType: 'json',
      success: this.successfulLogin,
    });
  }

  button() {
    if (this.state.loginInProgess) {
      return (<div>In progress, please wait...</div>)
    }

    return (
      <button
        type="button"
        className="btn btn-success"
        onClick={this.tryToLogin}
      >
        Sign In
      </button>
    );
  };

  renderMessages() {
    if (this.state.message !== '') {
      return (
        <div class="alert alert-danger" role="alert">
          {this.state.message}
        </div>
      );
    }
    return null;
  }

  render() {
    return !this.state.logged ? (
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-body">
            <h1>Login</h1>
            {this.renderMessages()}
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
              {this.button()}
            </div>
          </div>
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
