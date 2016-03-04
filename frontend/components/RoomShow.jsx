var React = require('react');
var ReactDOM = require('react-dom');
var RoomStore = require('../stores/roomStore');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Room = require('./Room');
var Map = require('./Map');
var ApiUtil = require('../util/apiUtil');
var Carousel = require('nuka-carousel');
var Modal = require('react-modal');
// var RoomForm = require('./RoomForm.jsx');
var modalStyle = require('./modalStyle.jsx');
var ReservationForm = require('./reservationForm.jsx');

var PropTypes = React.PropTypes;

var RoomShow = React.createClass({
  mixins: [Carousel.ControllerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var roomId = this.props.params.roomId;
    var room = RoomStore.find(roomId) || {} ;
    return { room: room, showModal: false, openConfModal: false};
  },

  componentDidMount: function () {
    this.roomListener = RoomStore.addListener(this._roomChanged);
    ApiUtil.fetchARoom(this.props.params.roomId);
  },
  componentWillUnmount: function () {
    this.roomListener.remove();
  },
  _roomChanged: function () {

    var roomId = this.props.params.roomId;
    var room = RoomStore.find(roomId);
    this.setState({ room: room });
  },

  reservationClick: function() {
    this.props.history.pushState(null, "reservation/" + room.id);
  },

  openModal: function() {
    this.setState({showModal: true})
  },

  closeModal: function() {
    this.setState({showModal: false})



  },

  openConfirmationModal: function() {
    this.setState({
      openConfModal: true
    })
  },

  closeConfirmationModal: function() {
    this.setState({
      openConfModal: false,
      showModal: false
    });
  },

  render: function () {

    var rooms = [];
    if (this.state.room) {
      rooms.push(this.state.room);
      // var reviewURL = "/rooms/" + this.state.room.id + "/review";
      // var Link = ReactRouter.Link;
    }




      console.log(this.state.room);
    return (
        <div className="carousel-container">
          <Carousel>
          <img src="assets/underwater/underwater-base-2.jpg"/>
          <img src="assets/underwater/underwater-bedroom.jpg"/>
          <img src="assets/underwater/underwater-bathroom.jpg"/>
          <img src="assets/underwater/underwater-car.jpg"/>
          <img src="assets/underwater/underwater-dinner.jpg"/>
        </Carousel>



        <div className="room-show-content-container">
          <div className="left-half-room">
            <div>
              <Room room={this.state.room} className="half" />
            </div>
          </div>
          <div className="right-half-room">

            <Modal
              isOpen={this.state.showModal}
              onRequestClose={this.closeModal}
              closeTimeoutMS={0}
              style={modalStyle}>

              <ReservationForm openConfirmationModal={this.openConfirmationModal} room={this.state.room}/>

            </Modal>

            <Modal
              isOpen={this.state.openConfModal}
              onRequestClose={this.closeConfirmationModal}
              closeTimeoutMS={0}
              style={modalStyle}>

              <h1>Congrats! You've booked a Lair!</h1>

            </Modal>

            <button className="reserve-lair-button" onClick={this.openModal}>Reserve Lair!</button>

            <Map
              singleRoom={true}
              rooms={rooms} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RoomShow;
