var React = require('react');
var RoomStore = require('../stores/room');
var ReactRouter = require('react-router');
var Room = require('./Room');
var Map = require('./Map');
var ApiUtil = require('../util/apiUtil');

var RoomShow = React.createClass({
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
    }
    var Link = ReactRouter.Link;
    var reviewURL = "/rooms/" + this.state.room.id + "/review";

    return (
        <div>

          <Link to="/rooms" >Back to Rooms Index</Link>
          {Map}
          <Map className="half"
            singleRoom={true}
            rooms={rooms}
            onMapClick={this.handleMapClick}
            onMarkerClick={this.handleMarkerClick} />
          <Room room={this.state.room} className="half" />
          {
            this.props.children ||
              <Link to={reviewURL}>Leave a Review</Link>
          }
        </div>
      );
  }
});

module.exports = RoomShow;
