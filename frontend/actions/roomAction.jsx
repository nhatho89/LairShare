var AppDispatcher = require('../dispatcher/dispatcher');
var RoomConstants = require('../constants/roomConstants');

var RoomActions = {
  receiveAllRooms: function(rooms){
    AppDispatcher.dispatch({
      actionType: RoomConstants.ROOMS_RECEIVED,
      rooms: rooms
    });
  }
}

module.exports = RoomActions;
