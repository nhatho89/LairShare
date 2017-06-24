var React = require('react');
var RoomAction = require('../actions/roomAction.jsx');
var SessionStore = require('../stores/sessionStore.js');
var ApiUtil = require('../util/apiUtil.js');
var RoomStore = require('../stores/roomStore.js');
var HostIndexItem = require('./hostIndexItem.jsx');
var ReactRouter = require('react-router');


var HostIndex = React.createClass({
  mixins: [ReactRouter.history],

  getInitialState: function() {
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
    var that = this;
    var content;

    if (this.state.hostRooms) {
      content = (
        this.state.hostRooms.map(function(hostRoom){
        return <HostIndexItem
          hostRoom={hostRoom}
          key={hostRoom.id}
          />
      }))
    }

    return (
      <div className="main-container">

        {content}

      </div>
    );
  }

});

module.exports = HostIndex;
