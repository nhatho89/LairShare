var React = require('react');
var Navbar = require('./navbarComponents/navBar.jsx');
var SessionStore = require('../stores/sessionStore');
var SessionActions = require('../actions/sessionAction');

var App = React.createClass({
  getInitialState: function() {
    return {
      user: SessionStore.currentUser()
    };
  },

  componentDidMount: function() {
    this.userListener = SessionStore.addListener(this.userChange);
    SessionActions.fetchSession();
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  userChange: function() {
    this.setState({ user: SessionStore.currentUser() });
  },

  render: function() {
    return (
      <div className="app">
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
