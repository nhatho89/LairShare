var React = require('react');
var ReactRouter = require('react-router');
var History = require('react-router').History;

var HostIndexItem = React.createClass({
  mixins: [ReactRouter.history],
  mixins: [History],

  handleItemClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, "rooms/" + this.props.hostRoom.id );
  },

  render: function() {
    var hostRoom = this.props.hostRoom;
    var handleItemClick = this.handleItemClick.bind(null, hostRoom);

    var content;
    // debugger
    if (hostRoom) {
        content = (
          <div className="trip-item-image" onClick={this.handleItemClick}>
            <img className="trip-receipt-pic" src={hostRoom.primary_photo_url}/>
          </div>
        )
    } else {
      content = (
        <div>
          No Host Room
        </div>
    )
    }

    return (
      <div className="host-rooms-container">
        {content}
      </div>
    );
  }

});

module.exports = HostIndexItem;
