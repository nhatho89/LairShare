var React = require('react');

var RoomHeader = React.createClass({



  render: function() {
    var room = this.props.room;
    return (
      <div className="room-header-container">
        <div className="host-picture">
        </div>

        <div className="header-title">
          <h2>{room.title}</h2>
          <p>{room.location}</p>
        </div>

        <div className="room-detail-icon">
          <ul>
            IMAGE
          </ul>

          <ul>

          </ul>

          <ul>

          </ul>

        </div>

      </div>
    );
  }

});

module.exports = RoomHeader;
