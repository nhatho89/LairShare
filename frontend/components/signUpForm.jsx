var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionActions = require('../actions/sessionAction');


var SignUpForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      username: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.closeModal();
    this.errors = [];
    this.validatePassword();

    if (this.errors.length > 0){
      this.setState({
        errors: this.errors
      });
    } else {
      SessionActions.signUp({
        username: this.state.username,
        password: this.state.password,
      });
    }
  },

  validatePassword: function() {
    var password = this.state.password;
    var passwordConfirmation = this.state.passwordConfirmation
    if (password.length < 6){
      this.errors.push("Password length too short (minimum: 6 characters)!");
    }
    if (password !== passwordConfirmation) {
      this.errors.push("Password confirmation and Password must match!");
    }
  },

  handleDemoLogin: function() {
    SessionActions.logIn({
      username: "Magneto",
      password: "qweasd"
    });
    this.props.closeModal();
  },


  render: function() {
    var alert = this.state.errors.map(function(error, idx){
        return (
          <div
            key={"error"+idx}
            className="alert alert-danger"
            role="alert">
            <strong>{error}</strong>
          </div>
        );
      });
    return(
      <form className='form-auth' onSubmit={this.handleSubmit}>
        {alert}
        <div className="auth-input">
          <div className="username-icon-container">
            <img className="username-icon" src="/assets/icons/social.png"></img>
          </div>
            <input
                type="text"
                id="username"
                className="auth-control"
                valueLink={this.linkState("username")}
                placeholder='Username'
                required
                autoFocus
            />
        </div>

        <div className="auth-input">
          <div className="username-icon-container">
            <img className="username-icon" src="/assets/icons/lock.png"></img>
          </div>
            <input
              type="password"
              id="password"
              className="auth-control"
              valueLink={this.linkState("password")}
              placeholder='Password'
              required
              />
        </div>
        <div className="auth-input">
          <div className="username-icon-container">
            <img className="username-icon" src="/assets/icons/lock-1.png"></img>
          </div>
          <input
            type="password"
            id="passwordConfirmation"
            className="auth-control"
            valueLink={this.linkState("passwordConfirmation")}
            placeholder='Confirm Password'
            required
            />

        </div>

        <div className="checkbox" id="signUpCheckbox">
          <div className="remember-me-container">
            <label className="remember-me">
              <input type="checkbox" value="agreement" required></input>
              I agree to the terms and conditions.
            </label>

          </div>

          <button
            className="demo-button"
            type="button"
            style={{float: "right"}}
            onClick={this.handleDemoLogin}>
            Demo Account
          </button>
        </div>
        <button
          className="auth-button"
          type="submit">
          Sign Up
        </button>
      </form>
    );
  }
});

module.exports = SignUpForm;
