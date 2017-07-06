var RoomActions = require('../actions/roomAction.jsx');
var FilterStore = require('../stores/filter_params');
var ReservationActions = require('../actions/reservationActions.jsx');
var RoomStore = require('../stores/roomStore.js');


var ApiUtil = {
  fetchAllRooms: function() {

    var filter = FilterStore.params();

    filter.dates.startDate = filter.dates.startDate.format()
    filter.dates.endDate = filter.dates.endDate.format()

    $.get('api/rooms', filter, function(allRooms) {
      RoomActions.receiveAllRooms(allRooms);
    })
  },

  fetchARoom: function(id) {
    $.get('api/rooms/' + id, function(room) {
      RoomActions.receiveRoom(room);
    })
  },

  fetchUserDetail: function(userId, receiveDetailCB) {
    $.ajax({
      url: 'api/users/'+ userId,
      method: "get",
      success: function(user){
        receiveDetailCB(user);
      },

      error: function(error, status){}
    });
  },

  fetchAllHostRooms: function(host) {

    var filter = {};
    filter.host = host.id

    $.get('api/rooms', filter, function(hostRooms) {
      RoomActions.receiveHostRooms(hostRooms);
    })
  },

  createReservation: function(reservationParams) {
    $.ajax({
      url: 'api/reservations',
      method: "post",
      dataType: "json",
      data: {reservation: {
        room_id: reservationParams.roomId,
        start_date: new Date(reservationParams.startDate),
        end_date: new Date(reservationParams.endDate),
        guest_id: reservationParams.guestId.id,
        guest_num: reservationParams.guests,
        message: reservationParams.message
      }},
      success: function(newReservation){
        ReservationActions.createNewReservation(newReservation);

      },
      error: function(e) {

      }
    });
  },

  fetchTrips: function(receiveUserTripsCB) {
    $.ajax({
      url: 'api/reservations/trips',
      method: "get",
      success: function(trips){
                  receiveUserTripsCB(trips);
                },
      error: function(error, status){

                }
    });
  },


  createReview: function(data, callback) {
    $.ajax({
      url: 'api/reviews',
      method: "post",
      dataType: "json",
      data: {review: {
        room_id: Number(data.room),
        user_id: Number(data.user),
        rating: Number(data.rating),
        body: data.body
      }},
      success: function(review){
                  console.log("success! ", review);
                  callback();
                },
      error: function(error, status){
                  console.log("error");
                }
    });
    $.post('api/reviews', { review: data }, function (room) {
      RoomActions.receiveAll([room]);
    });
  }

};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
