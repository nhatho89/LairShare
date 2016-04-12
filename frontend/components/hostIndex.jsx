var React = require('react');
var RoomAction = require('../actions/roomAction.jsx');
var SessionStore = require('../stores/sessionStore.js');
var ApiUtil = require('../util/apiUtil.js');
var RoomStore = require('../stores/roomStore.js');


var HostIndex = React.createClass({

  getInitialState: function() {
    RoomAction.receiveHostRooms();
    return ({
      hostRooms: ApiUtil.fetchHostRooms(SessionStore.currentUser())
    })
  },

  componentDidMount: function() {
    this.roomListener = RoomStore.addListener(this.updateRooms);
  },

  updateRooms: function() {
    this.setState({
      hostRooms: RoomStore.hostRooms()
    })
  },

  componentWillUnmount: function() {
    this.roomListener.remove();
  },

  render: function() {
    var content;

    if (this.hostRooms) {
      content = this.hostRooms.forEach(function(room) {
        return (
          <div className="host-rooms">
            Hello{room}
          </div>
        )
      })
    }

    return (
      <div className="main-container">
        <div className="host-rooms-container">
          {content}
          Rooms
        </div>
      </div>
    );
  }

});

module.exports = HostIndex;
