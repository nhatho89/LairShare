var RoomActions = require('../actions/roomAction.jsx');
var FilterStore = require('../stores/filter_params');

var ApiUtil = {
  fetchAllRooms: function() {
    var filter = FilterStore.params();
      $.get('api/rooms', filter, function(allRooms) {
          RoomActions.receiveAllRooms(allRooms);
        })
    },

  createRoom: function(data){
  $.post('api/rooms', { room: data }, function(room) {
    RoomActions.receiveAll([room]);
  });
},

  createReview: function(data) {
    $.post('api/reviews', { review: data }, function (room) {
      RoomActions.receiveAll([room]);
    });
  }

};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
