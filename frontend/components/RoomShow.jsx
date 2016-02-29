var React = require('react');
var RoomStore = require('../stores/roomStore');
var ReactRouter = require('react-router');
var Room = require('./Room');
var Map = require('./Map');
var ApiUtil = require('../util/apiUtil');
var Carousel = require('nuka-carousel');


var PropTypes = React.PropTypes;

var RoomShow = React.createClass({
  mixins: [Carousel.ControllerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    var roomId = this.props.params.roomId;
    var room = this._findRoomById(roomId) || {} ;
    return { room: room };
  },
  _findRoomById: function (id) {
    var res;
    var that = this;
     Object.keys(RoomStore.all()).forEach(function (roomId) {
      if (id == roomId) {
        res = RoomStore.all()[roomId];
      }
    }.bind(this));
     return res;
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
  render: function () {
    var rooms = [];
    if (this.state.room) {
      rooms.push(this.state.room);
      var reviewURL = "/rooms/" + this.state.room.id + "/review";
      var Link = ReactRouter.Link;
    }

    return (
        <div className="carousel-container">
          <Carousel>
          <img src="assets/underwater/underwater-base-2.jpg"/>
          <img src="assets/underwater/underwater-bedroom.jpg"/>
          <img src="assets/underwater/underwater-bathroom.jpg"/>
          <img src="assets/underwater/underwater-car.jpg"/>
          <img src="assets/underwater/underwater-dinner.jpg"/>
        </Carousel>



          <div className="room-show-map">
            <Map className="half"
              singleRoom={true}
              rooms={rooms}
              onMapClick={this.handleMapClick}
              onMarkerClick={this.handleMarkerClick} />
            <Room room={this.state.room} className="half" />
          </div>
          <div>
            {
              this.props.children ||
              <Link to={reviewURL}>Leave a Review</Link>
            }

          </div>
        </div>
      )
  }
});

module.exports = RoomShow;
