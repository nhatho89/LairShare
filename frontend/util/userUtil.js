var SessionStore = require('../stores/sessionStore');


var UserUtil = {
  createUserAccount: function(credentials, receiveNewUser) {
    $.ajax({
      url: 'api/users',
      method: "post",
      data: {user: credentials},
      success: function(user){
                receiveNewUser(user);
              },
      error: function(error, status){
                // console.log(status)
              }
    });
  },

  createSession: function(credentials, receiveCurrentUser) {
    $.ajax({
      url: 'api/session',
      method: "post",
      data: {user: credentials},
      success: function(user) {
                receiveCurrentUser(user);
              },
      error: function(error, status) {
                // console.log(status);
              }
    });
  },

  fetchSession: function(receiveCurrentUser) {
    $.ajax({
      url: 'api/session',
      method: "get",
      success: function(user){
                  if (user !== null) {
                    receiveCurrentUser(user);
                  } else {
                    console.log("not logged in");
                  }
                },
      error: function(error, status){
                  console.log("error");
                }
    });
  },

  destroySession: function(removeCurrentUser) {

    $.ajax({
      url: 'api/session',
      method: "DELETE",
      success: function(){
                  removeCurrentUser();
                },
      error: function(error, status){
                  // console.log(status)
                }
    });
  }
};

window.UserUtil = UserUtil;
module.exports = UserUtil;
