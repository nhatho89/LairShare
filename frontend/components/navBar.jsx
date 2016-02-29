var React = require('react');
var UserLoginForm = require('./userLoginForm.jsx');
var CurrentUser = require('./currentUser');
var UserStore = require('../stores/userStore');
var UserActions = require('../actions/userAction');

var NavBar = React.createClass({

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

  render: function() {
    var contents = (this.state.user) ?
    this.state.user.username : <UserLoginForm/>;
    return (
      <div>

        <div id="navbar" className="navbar-collapse collapse">
              <div className="navBar-right">
                  {contents}
              </div>

              <div className="navbar-left">
                <ul>
                  <li>
                    <a className="LS-logo" href="#">
                      <img alt="LairShare" src="/assets/LS-logo-1.png" />
                    </a>
                  </li>


                  <li>
                    <a className="GH-logo" href="https://github.com/nhatho89">
                      <img alt="GitHub" src="/assets/GitHub.png" />
                    </a>
                  </li>

                  <li>
                    <a className="LI-logo" href="https://www.linkedin.com/in/nhatho89">
                      <img alt="LinkedIn" src="/assets/LinkedIn.png" />
                    </a>
                  </li>
                </ul>

              </div>

            </div>
      </div>
    );
  }

});

module.exports = NavBar;
