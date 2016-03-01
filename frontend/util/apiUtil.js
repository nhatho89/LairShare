var RoomActions = require('../actions/roomAction.jsx');
var FilterStore = require('../stores/filter_params');
var ReservationActions = require('../actions/reservationActions.jsx');

var ApiUtil = {
  fetchAllRooms: function() {
    var filter = FilterStore.params();
    console.log(filter);
      $.get('api/rooms', filter, function(allRooms) {
          RoomActions.receiveAllRooms(allRooms);
        })
    },

  // createRoom: function(data){
  // $.post('api/rooms/new', { room: data }, function(room) {
  //   RoomActions.receiveRoom([room]);
  //   });
  // },

createReservation: function(data) {
  debugger
  $.post('api/reservations', { reservation: data }, function(reservation) {
    ReservationActions.receiveReservation([reservation]);
    });
  },

  createReview: function(data) {
    $.post('api/reviews', { review: data }, function (room) {
      RoomActions.receiveAll([room]);
    });
  }

};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
