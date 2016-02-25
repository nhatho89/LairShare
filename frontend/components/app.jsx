var React = require('react');
var NavBar = require('./navBar.jsx');


var UserStore = require('../stores/userStore');
var UserActions = require('../actions/userAction');


var App = React.createClass({
  getInitialState: function() {
    return {
      user: UserStore.currentUser()
    };
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.userChange);
    UserActions.getCurrentUser();
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  userChange: function() {
    this.setState({ user: UserStore.currentUser() });
  },

  render: function() {
    return (
      <div>
        This is App
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
