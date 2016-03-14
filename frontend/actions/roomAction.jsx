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
  }

}



module.exports = RoomActions;
