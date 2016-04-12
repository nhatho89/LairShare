var React = require('react');
var RoomAction = require('../actions/roomAction.jsx');
var SessionStore = require('../stores/sessionStore.js');
var ApiUtil = require('../util/apiUtil.js');


var HostIndex = React.createClass({
  getInitialState: function() {
    return ({
      hostRooms: ApiUtil.fetchHostRooms(SessionStore.currentUser())
    })
  },

  componentDidMount: function() {
    debugger
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
