var React = require('react');
var SessionActions = require('../../actions/sessionAction');
var History = require('react-router').History;


var NavBarRight = React.createClass({
  mixins: [History],

  handleSignOut: function() {
    SessionActions.logOut();
    this.history.push({pathname: "/"});
  },

  redirectUserProfile: function() {
    this.history.push({pathname: "users/" + this.props.user.id});
  },

  redirectHostProfile: function() {
    this.history.push({pathname: "host/"})
  },

  render: function() {
    var display;
    if (this.props.user.username) {
      display = (
        <div className="signInUp">
          <div>
            <p>{this.props.user.username}</p>
          </div>
          <div className="profile-pic">
            <img className="profile-pic" src={this.props.user.profile_pic}></img>
            <div className="dropdown-content">
              <a onClick={this.redirectUserProfile}>My Trips</a>
              <a onClick={this.handleSignOut}>Sign out</a>
            </div>
          </div>
        </div>
      )
    } else {
      display = (
        <div className="signed-out-container">
          <div className="signin-signout">
            <div className="sign-in-button dropdown-container" onClick={this.props.openSigninModal}>
              <p className="auth-text">Sign In</p>
            </div>
            <div className="sign-up-button dropdown-container" onClick={this.props.openSignupModal}>
              <p className="auth-text">Sign Up</p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="navBar-right">
        {display}
      </div>
    );
  }

});

module.exports = NavBarRight;
