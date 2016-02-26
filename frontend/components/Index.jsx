var React = require('react');
var IndexItem = require('./IndexItem');
var FilterStore = require('../stores/filter_params.js');

var Index = React.createClass({
  getInitialState: function() {
    return (
      {params: FilterStore.params()}
    )
  },

  handleItemClick: function (room) {
    this.props.history.pushState(null, "rooms/" + room.id );
  },

  componentDidMount: function() {
    this.paramsListener = FilterStore.addListener(this.filterChange);
  },

  componentWillUnmount: function() {
    console.log('index unmounted');
    this.paramsListener.remove();
  },

  filterChange: function() {
    this.setState({params: FilterStore.params});
  },

  render: function(){
    var handleItemClick = this.handleItemClick;
    var that = this;
    var filteredRooms = [];

    Object.keys(this.props.rooms).forEach(function(id) {
      var room = that.props.rooms[id];
      if (room.max_sleep_num >= FilterStore.params().minSleepNum &&
        room.max_sleep_num <= FilterStore.params().maxSleepNum) {
        filteredRooms.push(room);
      }
    })



    return (
      <div>
        <h1>Index</h1>
        {
          filteredRooms.map(function(room){

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
