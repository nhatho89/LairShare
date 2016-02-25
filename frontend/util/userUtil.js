// var UserAction = require('../actions/userAction.jsx');


var UserUtil = {
  attemptLogIn: function(user) {
      $.ajax({
        url: '/api/session',
        type: 'POST',
        dataType: 'json',
        data: {user: user},
        success: function(user) {
          UserAction.logIn(user);
        }
      })
    },

  attemptLogOut: function() {
      $.ajax({
        url: '/api/session',
        type: 'DELETE',
        dataType: 'json',
        success: function() {
          UserAction.logOut();
        }
      })
    },

  getCurrentUser: function() {

      $.ajax({
        url: '/api/session',
        type: 'GET',
        dataType: 'json',

        success: function(user) {
          UserAction.logIn(user);
        }
      })
    }
};

window.UserUtil = UserUtil;
module.exports = UserUtil;
