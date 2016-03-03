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
  // status: null
};

// var _newReservationId = null;

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

// var verified = function(avail) {
//   _reservationStatus = {
//     verified: true,
//     avail: avail,
//     booked: null
//   };
// };

// var receiveNewReservation = function(reservation) {
  // _reservationConfParams = {
  //   reservationId: reservation.id,
  //   roomId: reservation.roomId,
  //   startDate: "",
  //   endDeate: "",
  //   guests: "",
  //   status: ""
  // };

//   _reservationStatus = {
//     verified: true,
//     avail: true,
//     booked: "new"
//   }
// };

// ReservationStore.all = function() {
//   return Object.assign({}, _reservationParams);
// };
//
// ReservationStore.isVerified = function(){
//   return _reservationStatus.verified;
// };
//
// ReservationStore.isAvailable = function(){
//   return _reservationStatus.verified && _reservationStatus.avail;
// };

ReservationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ReservationConstants.CREATE_RESERVATION:
    // debugger
      _reservationParams = payload.reservation;
      ReservationStore.__emitChange();
      break;
  }
};


module.exports = ReservationStore;
