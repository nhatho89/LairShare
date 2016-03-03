var AppDispatcher = require('../dispatcher/dispatcher');
var ReservationConstants = require('../constants/reservationConstants.js');

var ReservationActions = {

  //TODO Edit this to do confirmation reservation
  createNewReservation: function(value) {
    AppDispatcher.dispatch({
      actionType: ReservationConstants.CREATE_RESERVATION,
      reservation: value
    });
  }
}

module.exports = ReservationActions;
