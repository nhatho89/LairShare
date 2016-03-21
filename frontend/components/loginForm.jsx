var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionActions = require('../actions/sessionAction.js');

var LoginModalForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      username: "",
      password: ""
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.closeModal();
    SessionActions.logIn({
      username: this.state.username,
      password: this.state.password
    });
  },



  // resize: function() {
  //   // resize modal
  //   $(".modal-dialog").addClass("user-modal");
  //   // focus
  //   // $("#inputEmail").focus();
  // },

  // componentWillUnmount: function(){
  //   debugger;
  // },

  fillOutLogin: function() {
    var username = "Magneto";
    var password = "qweasd";
    this.setState({
      username: username,
      password: password
    });

    // not working
    // var i = 0;
    // var text;

    // (function type(_this) {
    //     text = username.slice(0, ++i);
    //     document.getElementById('inputEmail').value = text;
    //     if (text === username) {
    //       typePassword();
    //     };
    //     setTimeout(type, 80);
    // }(this));
    // i = 0;
    // var typePassword = function() {
    //     text = password.slice(0, ++i);
    //     document.getElementById('inputPassword').value = text;
    //     if (text === password) return;
    //     setTimeout(type, 80);
    // };
  },

  // componentDidMount: function() {
  //   this.resize();
  // },

  render: function() {
    return(
      <form
         className='form-auth'
         autoComplete="off"
         onSubmit={this.handleSubmit}>
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
            id="inputPassword"
            className="auth-control"
            valueLink={this.linkState("password")}
            placeholder='Password'
            required
            />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me"></input>
             Remember me
          </label>
          <button
            className="demo-button"
            type="button"
            style={{float: "right"}}
            onClick={this.fillOutLogin}>
            Demo Account
          </button>
        </div>
        <button
           className="auth-button"
           type="submit">
           Log In
        </button>
      </form>
    );
  }
});

module.exports = LoginModalForm;
