var React = require('react');
var RoomStore = require('../stores/roomStore');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Room = require('./Room');
var Map = require('./Map');
var ApiUtil = require('../util/apiUtil');
var Carousel = require('nuka-carousel');
var Modal = require('react-modal');
var RoomShow = require('./RoomShow.jsx');

var PropTypes = React.PropTypes;

var RoomShow = React.createClass({
  mixins: [Carousel.ControllerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var roomId = this.props.params.roomId;
    var room = this._findRoomById(roomId) || {} ;
    return { room: room, showModal: false };
  },
  _findRoomById: function (id) {
    console.log("looking for: " + id);
    var res;
    var that = this;
    //  Object.keys(RoomStore.all()).forEach(function (roomId) {
    //   if (id == roomId) {
    //     res = RoomStore.all()[roomId];
    //   }
    // }.bind(this));
    return RoomStore.all()[id];
    //  return res;
  },
  componentDidMount: function () {
    this.roomListener = RoomStore.addListener(this._roomChanged);
    ApiUtil.fetchAllRooms();
  },
  componentWillUnmount: function () {
    this.roomListener.remove();
  },
  _roomChanged: function () {
    var roomId = this.props.params.roomId;
    var room = this._findRoomById(roomId);
    this.setState({ room: room });
  },

  reservationClick: function() {
    this.props.history.pushState(null, "reservation/" + room.id);
  },

  openModal: function() {
    this.setState({showModal: !this.state.showModal})
  },

  closeModal: function() {
    this.setState({showModal: !this.state.showModal})
  },

  render: function () {
    var rooms = [];
    if (this.state.room) {
      rooms.push(this.state.room);
      var reviewURL = "/rooms/" + this.state.room.id + "/review";
      var Link = ReactRouter.Link;
    }

    var style = {
        overlay : {
          position          : 'fixed',
          top               : 0,
          left              : 0,
          right             : 0,
          bottom            : 0,
          backgroundColor   : 'rgba(255, 255, 255, 0.75)'
        },
        content : {
          position                   : 'absolute',
          top                        : '40px',
          left                       : '40px',
          right                      : '40px',
          bottom                     : '40px',
          border                     : '1px solid #ccc',
          background                 : '#fff',
          overflow                   : 'auto',
          WebkitOverflowScrolling    : 'touch',
          borderRadius               : '4px',
          outline                    : 'none',
          padding                    : '20px'

        }
      };


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
              style={style}>

              <h1>Modal Content</h1>
              <p>Etc.</p>
            </Modal>

            <button onClick={this.openModal}>Book now</button>

            <Map
              singleRoom={true}
              rooms={rooms} />
          </div>
        </div>
        </div>
      )
  }
});

module.exports = RoomShow;
