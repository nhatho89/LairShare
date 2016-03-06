var React = require('react');
var ListItem = require('./listItem.jsx');
var Index = require('./Index.jsx');

var List = React.createClass({



  render: function() {
    var rooms = this.props.rooms;
    var history = this.props.history;
    var listItems = Object.keys(rooms).map(function(room_id) {
      return(
        <ListItem
           key={room_id}
           room={rooms[room_id]}
           history={history}/>);
    });
    var redirectPrompt = (
      <h4>
        This demo only contains data for
        <a href="#/search/San-Francisco">
          {" San Francisco"}
        </a>
      </h4>
    );
    return (
      <div className="container-fluid search-list-frame">
        <div className="row">
          <div className="container-fluid search-list-listings">
            <div className="row">
              {listItems.length > 0 ? Index : redirectPrompt}
            </div>
          </div>

        </div>


      </div>
    );
  }



});

module.exports = List;
