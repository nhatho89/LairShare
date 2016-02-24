var ApiUtil = {
  createUserAccount: function(credentials, receiveNewUser) {
    $.ajax({
      url: 'api/users',
      method: "post",
      // data: {user: credentials},
      success: function(user){
                receiveNewUser(user);
      }
    });
  }

};

module.exports = ApiUtil;
