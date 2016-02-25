var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],
  render: function(){
    var room = this.props.room;
    return (
        <div className="room-index-item" onClick={this.props.onClick}>
          {room.description}
          <br/>
          Rating: {room.average_rating || "No reviews yet"}
          <br/>
          <img src={room.picture_url}/>
        </div>
    );
  }
});

module.exports = IndexItem;
