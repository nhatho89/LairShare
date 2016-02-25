var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var RoomConstants = require('../constants/roomConstants.js');

var _rooms = [];
var RoomStore = new Store(AppDispatcher)

var receiveRoom = function(rooms) {
  _rooms = rooms;
}

RoomStore.all = function() {
  return _rooms.slice(0);
};

RoomStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case RoomConstants.ROOMS_RECEIVED:
    receiveRoom(payload.rooms)
    RoomStore.__emitChange();
    break;
  }
}
window.RoomStore = RoomStore;
module.exports = RoomStore;
