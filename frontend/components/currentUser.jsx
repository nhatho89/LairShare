var React = require('react');

var UserActions = require('../actions/userAction');
var UserStore = require('../stores/userStore');

var CurrentUser = React.createClass({

  initiateLogout: function() {
    UserActions.attemptLogOut();
  },

  render: function() {
    return (
      <div>
        logged in as {UserStore.currentUser().username}
        <input type="submit"
          value="log out" onClick={this.initiateLogout} />
      </div>
    );
  }

});

module.exports = CurrentUser;
