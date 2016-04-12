var React = require('react');
var SessionStore = require('../stores/sessionStore');
var UserActions = require('../actions/userAction');
var SessionActions = require('../actions/sessionAction');
var LoginForm = require('./loginForm');
var authModalStyle = require('./authModalStyle.jsx');
var Modal = require('react-modal');
var SignupForm = require('./signUpForm');

var History = require('react-router').History;
var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {
      user: SessionStore.currentUser(),
      showModal: false,
      showSignupModal: false
    };
  },

  openSigninModal: function() {
    this.setState({showModal: true})
  },

  closeSigninModal: function() {
    this.setState({showModal: false})
  },

  openSignupModal: function() {
    this.setState({showSignupModal: true})
  },

  closeSignupModal: function() {
    this.setState({showSignupModal: false})
  },

  componentDidMount: function() {
    this.userListener = SessionStore.addListener(this.userChange);
    SessionActions.fetchSession();
  },

  userChange: function() {

    this.setState({ user: SessionStore.currentUser() });

  },

  redirectUserProfile: function() {
    this.history.push({pathname: "users/" + this.state.user.id});
  },

  redirectHostProfile: function() {
    this.history.push({pathname: "host/"})
  },

  handleSignOut: function() {
    SessionActions.logOut();
    this.history.push({pathname: "/"});
  },



  render: function() {
    var display;

    if (SessionStore.currentUser().username) {
      display = (
        <div className="signInUp">
          <div>
            <p>{this.state.user.username[0].toUpperCase() + this.state.user.username.slice(1,this.state.user.username.length)}</p>
          </div>
          <div className="profile-pic">
            <img className="profile-pic" src={this.state.user.profile_pic}></img>

            <div className="dropdown-content">
              <a onClick={this.redirectUserProfile}>My Trips</a>
              <a onClick={this.redirectHostProfile}>My Rooms</a>
              <a onClick={this.handleSignOut}>Sign out</a>
            </div>
          </div>
        </div>
      )
    } else {
      display = (
        <div className="signed-out-container">
          <div className="signin-signout">
            <div className="sign-in-button" onClick={this.openSigninModal}>
              Sign In
            </div>
            <div className="sign-up-button" onClick={this.openSignupModal}>
              Sign Up
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="navbar">

        <Modal

          isOpen={this.state.showModal}
          onRequestClose={this.closeSigninModal}
          closeTimeoutMS={0}
          style={authModalStyle}>

          <LoginForm closeModal={this.closeSigninModal}/>

        </Modal>

        <Modal

          isOpen={this.state.showSignupModal}
          onRequestClose={this.closeSignupModal}
          closeTimeoutMS={0}
          style={authModalStyle}>

          <SignupForm closeModal={this.closeSignupModal}/>

        </Modal>

        <div id="navbar" className="navbar-collapse collapse">
          <div className="navbar-left">
            <ul>
              <li>
                <a className="logo" href="/#">
                  LairShare
                </a>
              </li>


              <li>
                <a className="logo" href="/#/search/San-Francisco">
                  San Francisco
                </a>
              </li>

              <li>
                <a className="logo" href="/#/search/New-York-City">
                  New York
                </a>
              </li>

              <li>
                <a className="logo" href="/#/search/Saint-Martin">
                  Caribbean
                </a>
              </li>

            </ul>

          </div>




          <div className="navBar-right">
              {display}
          </div>



        </div>

      </div>
    );
  }

});

module.exports = NavBar;
