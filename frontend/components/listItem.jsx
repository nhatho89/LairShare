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
      <div className="col-xs-12 col-sm-6 row-space-5">
        <div
          className="container-fluid cursor-pointer"
          id={"room-" + room.id}>
          <Index/>
        </div>
      </div>
    );
  }
});

module.exports = ListItem;
