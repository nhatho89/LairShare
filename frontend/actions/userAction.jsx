var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var UserUtil = require('../util/userUtil.js');

var UserActions = {

  signUp: function(userInfo){
    UserUtil.createUserAccount(userInfo, this.receiveNewUser);
  },

  logIn: function(credentials) {
    UserUtil.createSession(credentials, this.receiveCurrentUser)
  },

  logOut: function() {
    UserUtil.destroySession(this.removeCurrentUser);
  },

  fetchSession: function() {
    UserUtil.fetchSession(this.receiveCurrentUser);
  },

// ============= Callbacks =============== //

  receiveNewUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVENEWUSER,
      user: user
    });
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVEUSER,
      user: user
    });
  },

  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: UserConstants.REMOVECURRENTUSER,
      user: ""
    });
  }

};

module.exports = UserActions;
