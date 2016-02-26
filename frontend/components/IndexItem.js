var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],


  render: function(){
    var room = this.props.room;
    var roomResult = <ul>
      <li>
        {room.description}
      </li>
      <br/>
      <li>
        Price: {room.price}
      </li>
      <br/>
      <li>
        <img src={room.primary_photo_url}/>
      </li>
    </ul>

    return (
        <div className="room-index-item" onClick={this.props.onClick}>
          {roomResult}
        </div>
    );
  }
});

module.exports = IndexItem;
