var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ReservationConstants = require('../constants/reservationConstants.js');
var ReservationStore = new Store(AppDispatcher);

var _reservationParams = {
  roomId: null,
  host: null,
  checkin: null,
  checkout: null,
  guests: null,
  status: null
};

var _newReservationId = null;

 // phase B datepicker
// var _unavailableDates = [];

var resetReservationStore = function() {
  _reservationParams = {
    roomId: "",
    checkin: "",
    checkout: "",
    guests: "",
    status: ""
  };

  _reservationStatus = {
    verified: false,
    avail: false,
    booked: null
  }
};

var verified = function(avail) {
  _reservationStatus = {
    verified: true,
    avail: avail,
    booked: null
  };
};

var receiveNewReservation = function(reservation) {
  // _reservationConfParams = {
  //   reservationId: reservation.id,
  //   roomId: reservation.roomId,
  //   checkin: "",
  //   checkout: "",
  //   guests: "",
  //   status: ""
  // };

  _reservationStatus = {
    verified: true,
    avail: true,
    booked: "new"
  }
};

ReservationStore.all = function() {
  return Object.assign({}, _reservationParams);
};

ReservationStore.isVerified = function(){
  return _reservationStatus.verified;
};

ReservationStore.isAvailable = function(){
  return _reservationStatus.verified && _reservationStatus.avail;
};

ReservationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ReservationConstants.CREATE_RESERVATION:
    debugger
      receiveNewReservation(payload.reservation);
      ReservationStore.__emitChange();
      break;
  }
};


module.exports = ReservationStore;
