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
  // <NavBar history={this.props.history}/>
  // <div className="landing-page-background">
  //   <img src='/assets/Island/island.jpeg'>
  //
  //   </img>
  // </div>

  render: function() {
    return (
      <div className="app">
        
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
