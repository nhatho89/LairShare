var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var ApiUtil = require('../util/apiUtil.js');

var UserActions = {

  signUp: function(userInfo){
    ApiUtil.createUserAccount(userInfo, this.receiveNewUser);
  },


  receiveNewUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVENEWUSER,
      user: user
    });
  }


};

module.exports = UserActions;
