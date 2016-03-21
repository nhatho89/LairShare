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
      fname: "",
      lname: "",
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
        user_profile_attributes: {
          fname: this.state.fname,
          lname: this.state.lname
        }
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

            <input
              type="password"
              id="password"
              className="auth-control"
              valueLink={this.linkState("password")}
              placeholder='Password'
              required
              />
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
          <label>
            <input type="checkbox" value="agreement" required></input>
             I agree to the terms and conditions.
          </label>
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
