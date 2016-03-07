var React = require('react');
var UserLoginForm = require('./userLoginForm.jsx');
var CurrentUser = require('./currentUser');
var UserStore = require('../stores/userStore');
var UserActions = require('../actions/userAction');
var History = require('react-router').History;
var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {

      user: UserStore.currentUser()
    };
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.userChange);
    UserActions.getCurrentUser();
  },

  userChange: function() {
    this.setState({ user: UserStore.currentUser() });
  },

  redirectUserProfile: function() {
    this.history.push({pathname: "users/" + this.state.user.id});

  },



  render: function() {

    var contents = (this.state.user) ?
    this.state.user.username.toUpperCase() : "";
    return (
      <div>

      </div>
    );
  }

});

module.exports = NavBar;
