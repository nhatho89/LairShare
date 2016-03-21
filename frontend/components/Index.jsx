var React = require('react');
var IndexItem = require('./IndexItem');

var Index = React.createClass({

  handleItemClick: function (room) {
    this.props.history.pushState(null, "rooms/" + room.id );
  },

  

  render: function(){
    var handleItemClick = this.handleItemClick;
    var that = this;
    var filteredRooms = [];

    return (
      <div className="search-results">

        {
          Object.keys(this.props.rooms).map(function(id){
            var room = that.props.rooms[id];
            var boundClick = handleItemClick.bind(null, room);
            return <IndexItem
              onClick={boundClick}

              room={room}
              key={room.id} />
          })
        }
      </div>
    );
  }
});

module.exports = Index;
