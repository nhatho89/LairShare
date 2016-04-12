var AppDispatcher = require('../dispatcher/dispatcher');
var RoomConstants = require('../constants/roomConstants');
var ApiUtil = require('../util/apiUtil.js');

var RoomActions = {
  receiveAllRooms: function(rooms){
    AppDispatcher.dispatch({
      actionType: RoomConstants.ROOMS_RECEIVED,
      rooms: rooms
    });
  },

  receiveRoom: function(room){
    AppDispatcher.dispatch({
      actionType: RoomConstants.ROOM_RECEIVED,
      room: room
    });
  },

  receiveHostRooms: function(hostRooms) {
    AppDispatcher.dispatch({
      actionType: RoomConstants.HOST_ROOMS_RECEIVED,
      hostRooms: hostRooms
    });
  },


}



module.exports = RoomActions;
