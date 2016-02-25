var RoomActions = require('../actions/roomAction.jsx');

var ApiUtil = {
  fetchAllRooms: function() {
      $.ajax({
        url: 'api/rooms',
        success: function(allRooms) {
          RoomActions.receiveAllRooms(allRooms);
        }
      })
    },

  createRoom: function(data){
  $.post('api/rooms', { room: data }, function(room) {
    ApiActions.receiveAll([room]);
  });
},

  createReview: function(data) {
    $.post('api/reviews', { review: data }, function (room) {
      ApiActions.receiveAll([room]);
    });
  }

};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
