var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ReservationConstants = require('../constants/reservationConstants.js');


var ReservationStore = new Store(AppDispatcher);

var _reservationParams = {
  roomId: null,
  host: null,
  startDate: null,
  endDate: null,
  guests: null,
  guestId: null
};


var resetReservationStore = function() {
  _reservationParams = {
    roomId: "",
    startDate: "",
    endDate: "",
    guests: "",
    status: ""
  };

  _reservationStatus = {
    verified: false,
    avail: false,
    booked: null
  }
};

ReservationStore.params = function() {
  return _reservationParams;
};



ReservationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ReservationConstants.CREATE_RESERVATION:
      _reservationParams = payload.reservation;
      ReservationStore.__emitChange();
      break;
  }
};


module.exports = ReservationStore;
