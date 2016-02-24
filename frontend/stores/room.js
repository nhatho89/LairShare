var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
// var RoomConstant = require('./constants/roomConstants.js');

var _rooms = {};
var RoomStore = new Store(AppDispatcher)

var receiveRoom = function(rooms) {
  // sets keys to be the room.id and value to be the room object
  _rooms = {};
  rooms.forEach(function(room) {
    _rooms[room.id] = room;
  });
}

RoomStore.all = function() {
  return _rooms.slice(0);
};

RoomStore._onDispatch = function(payload) {
  switch(payload.actionType) {
    case RoomConstant.ROOMS_RECEIVED:
    receiveRoom(payload.rooms)
    RoomStore.__emitChange();
    break;
  }
}
window.RoomStore = RoomStore;
module.exports = RoomStore;
