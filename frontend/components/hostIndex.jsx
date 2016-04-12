var React = require('react');
var RoomAction = require('../actions/roomAction.jsx');
var SessionStore = require('../stores/sessionStore.js');
var ApiUtil = require('../util/apiUtil.js');
var RoomStore = require('../stores/roomStore.js');


var HostIndex = React.createClass({

  getInitialState: function() {
    // RoomAction.receiveHostRooms();
    return ({
      hostRooms: RoomStore.hostRooms()
    })
  },

  componentWillMount: function() {
    this.roomListener = RoomStore.addListener(this.updateRooms);
  },

  componentDidMount: function() {
    RoomAction.fetchHostRooms(SessionStore.currentUser());
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
    // debugger
    if (this.state.hostRooms) {
      this.state.hostRooms.forEach(function(room) {
        content = (
          <div className="trip-item-image">
            <img className="trip-receipt-pic" src={room.primary_photo_url}/>
          </div>
        )
      })
    } else {
      content = (
        <div>
          Nope
        </div>
    )
    }

    return (
      <div className="main-container">
        <div className="host-rooms-container">
          {content}
        </div>
      </div>
    );
  }

});

module.exports = HostIndex;
