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

  componentWillUnmount: function() {
    $(window).off('scroll', this.scrollListener);

  },

  userChange: function() {
    this.setState({ user: SessionStore.currentUser() });
  },

  addScrollFollow: function() {
    $(window).on('scroll', this.scrollListener );
  },

  scrollListener: function() {
    var element = $('#navbar').offset().top;
      var subtitle = $('#subtitle').offset().top,
      scrollTop = $(window).scrollTop(),
      topPos

      if (subtitle <= element) {
        $("#navbar").css("backgroundColor", "rgb(74, 74, 74)")
      } else {
        $("#navbar").css("backgroundColor", "#1178B3")
      }
  },

  render: function() {

    return (
      <div>
        <div id="navbar" className="navbar">
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
