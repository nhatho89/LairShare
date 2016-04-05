var React = require('react');
var ReactRouter = require('react-router');

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],

  render: function(){
    var room = this.props.room;

    return (
        <div className="room-index-item" onClick={this.props.onClick}>
          <ul className="room-picture">
            <img src={room.primary_photo_url}/>
          </ul>

          <ul className="room-info">
            <ul className="room-info-inner">
              <li>
                {room.title}
              </li>

              <li>
                Price: ${room.price}
              </li>

            </ul>
            <br/>
          </ul>
        </div>
    );
  }
});

module.exports = IndexItem;
