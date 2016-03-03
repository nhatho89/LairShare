var React = require('react');
var RoomStore = require('../stores/roomStore.js');
var LoadingScreen = require('./loadingScreen.jsx');
var RoomAction = require('../actions/roomAction.jsx');


var UserIndex = React.createClass({
  getInitialState: function() {

    var roomId = this.props.params.id;
    var room = RoomStore.find(roomId);
    return({
      room: room || {},
      hasDetail: false
    });
  },

  // _updateRoom: function() {
  //   var room = RoomStore.find(this.props.params.roomId);
  //
  //   // for testing only
  //   room['hasDetail'] = true;
  //   // for testing only
  //
  //   this.setState({
  //     room: room,
  //     hasDetail: room.hasDetail
  //   });
  // },

  componentWillUnmount: function() {
    this.roomIndexToken.remove();
  },

  componentDidMount: function() {

    this.roomIndexToken = RoomStore.addListener(this._updateRoom);
    // userAction.fetchRoomDetail(this.props.params.id);
  },


  render: function() {
      return (
        <div className="container-fluid full-width below-nav room">

          <h1>
            This is your profile page
          </h1>


        </div>
      );

  }


});

module.exports = UserIndex;
