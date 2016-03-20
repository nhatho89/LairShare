var React = require('react');
var Index = require('./Index.jsx');




var ListItem = React.createClass({

  handleClick: function() {
    // render roomIndex
    var roomId = this.props.room.id;
    this.props.history.pushState(null, "/rooms/" + roomId);
  },

  render: function() {
    var room = this.props.room;
    return(
      <div>
        <div
          className="container-fluid"
          id={"room-" + room.id}>
          <Index/>
        </div>
      </div>
    );
  }
});

module.exports = ListItem;
