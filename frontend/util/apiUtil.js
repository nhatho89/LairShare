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

  fetchARoom: function(id) {
    $.get('api/rooms/' + id, function(room) {
        RoomActions.receiveRoom(room);
      })
  },

  fetchUserDetail: function(userId, receiveDetailCB) {
    // debugger
    $.ajax({
      url: 'api/users/'+ userId,
      method: "get",
      success: function(user){
        console.log(user);
                  receiveDetailCB(user);
                },
      error: function(error, status){
                  debugger;
                  // console.log(status)
                }
    });
  },

  createReservation: function(reservationParams) {

    // var room = RoomStore.find(id);
    // debugger;
    $.ajax({
      url: 'api/reservations',
      method: "post",
      dataType: "json",
      data: {reservation: {
        room_id: reservationParams.roomId,
        start_date: new Date(reservationParams.startDate),
        end_date: new Date(reservationParams.endDate),
        guest_id: reservationParams.guestId,
        guest_num: reservationParams.guests,
        message: reservationParams.message
      }},
      success: function(newReservation){
        ReservationActions.createNewReservation(newReservation);

      },
      error: function(e) {
        debugger
      }
    });
  },

// createReservation: function(data) {
//   debugger
//   $.post('api/reservations', { reservation: data }, function(reservation) {
//     ReservationActions.receiveReservation([reservation]);
//     });
//   },

  createReview: function(data) {
    $.post('api/reviews', { review: data }, function (room) {
      RoomActions.receiveAll([room]);
    });
  }

};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
