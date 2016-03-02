var RoomActions = require('../actions/roomAction.jsx');
var FilterStore = require('../stores/filter_params');
var ReservationActions = require('../actions/reservationActions.jsx');
var RoomStore = require('../stores/roomStore.js');

// var ReservationStore = require('../stores/reservationStore.js');

var ApiUtil = {
  fetchAllRooms: function() {
    var filter = FilterStore.params();
    filter.dates.startDate = filter.dates.startDate.format()
    filter.dates.endDate = filter.dates.endDate.format()

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

  createReservation: function(message, receiveNewTripConfCB) {
    debugger
    var room = RoomStore.all();
    // debugger;
    $.ajax({
      url: 'api/reservations/',
      method: "post",
      dataType: "json",
      data: {reservation: {
        room_id: room.roomId,
        start_date: new Date(room.startDate),
        end_date: new Date(room.endDate),
        guest_num: room.guests
      }},
      success: function(newReservation){
        ReservationActions.createReservation(newReservation);
      }
    });
  },

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
