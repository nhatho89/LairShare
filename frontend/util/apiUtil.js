var RoomActions = require('../actions/roomAction.jsx');

var ApiUtil = {
  fetchAllRooms: function() {
      $.ajax({
        url: 'api/rooms',
        success: function(allRooms) {
          RoomActions.receiveAllRooms(allRooms);
        }
      })
    }

};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
