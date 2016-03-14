var AppDispatcher = require('../dispatcher/dispatcher.js');
var TripConstants = require('../constants/tripConstants.js');
var ApiUtil = require('../util/apiUtil.js');

var TripActions = {

  submitReservation: function(message) {
    ApiUtil.createReservation(message, this.receiveNewTripConf);
  },

  fetchUserTrips: function() {
    ApiUtil.fetchTrips(this.receiveUserTrips)
  },


  receiveNewTripConf: function(newTrip) {
    AppDispatcher.dispatch({
      actionType: TripConstants.TRIP_REQUEST_SUBMITTED,
      newTrip: newTrip
    });
  },

  resetTrip: function() {
    AppDispatcher.dispatch({
      actionType: TripConstants.RESET_TRIPSTORE
    });
  },

  receiveUserTrips: function(trips) {
    AppDispatcher.dispatch({
      actionType: TripConstants.TRIPS_RECEIVED,
      trips: trips
    });
  }

};

module.exports = TripActions;
