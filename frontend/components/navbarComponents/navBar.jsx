var React = require('react');
var SessionStore = require('../../stores/sessionStore');
var SessionActions = require('../../actions/sessionAction');
var LoginForm = require('./loginForm');
var authModalStyle = require('./authModalStyle.jsx');
var Modal = require('react-modal');
var SignupForm = require('./signUpForm');
var NavBarRight = require('./navBarRight');
var NavBarLeft = require('./navBarLeft');

var NavBar = React.createClass({

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

  render: function() {

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

          <NavBarLeft/>

          <NavBarRight
            user={this.state.user}
            openSigninModal={this.openSigninModal}
            openSignupModal={this.openSignupModal} />

        </div>
      </div>
    );
  }

});

module.exports = NavBar;
