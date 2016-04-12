var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var RoomConstants = require('../constants/roomConstants.js');

var _rooms = {};
var _hostRoom = {};
var RoomStore = new Store(AppDispatcher)

var receiveRoom = function(rooms) {
  _rooms = {};
  rooms.forEach(function(room) {
  _rooms[room.id] = room;
  });
};

RoomStore.find = function(id) {
  return _rooms[id];
};

RoomStore.hostRooms = function() {
  return _hostRoom;
};

var patchDetail = function(room) {
  _rooms[room.id] = room;
};

RoomStore.all = function() {
  return Object.assign({}, _rooms);
};

RoomStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case RoomConstants.ROOMS_RECEIVED:
    receiveRoom(payload.rooms)
    RoomStore.__emitChange();
    break;
    case RoomConstants.ROOM_RECEIVED:
    patchDetail(payload.room)
    RoomStore.__emitChange();
    break;
    case RoomConstants.HOST_ROOMS_RECEIVED:
    // debugger
    _hostRoom = payload.hostRooms;
    RoomStore.__emitChange();
    break;
  }
}
window.RoomStore = RoomStore;
module.exports = RoomStore;
