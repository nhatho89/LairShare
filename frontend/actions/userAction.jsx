var AppDispatcher = require('../dispatcher/dispatcher');
var UserUtil = require('../util/userUtil');
var UserConstants = require('../constants/userConstants.js');

var UserAction = {

  attemptLogIn: function(params) {
    UserUtil.attemptLogIn(params);
  },

  logIn: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOG_IN_USER,
      user: user
    });
  },

  attemptLogOut: function() {
    UserUtil.attemptLogOut();
  },

  logOut: function() {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOG_OUT_USER
    });
  },
  
  getCurrentUser: function() {
    UserUtil.getCurrentUser();
  }


};

window.UserAction = UserAction;
module.exports = UserAction;
