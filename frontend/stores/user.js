var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

var UserStore = new Store(AppDispatcher);

var _currentUser = {};

var receiveUser = function(user) {
  _currentUser = user;
};


UserStore.all = function () {
  return _currentUser;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVENEWUSER:
      receiveUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

window.UserStore = UserStore;
module.exports = UserStore;
