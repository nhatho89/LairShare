var React = require('react');
var FilterActions = require('../../actions/filter_actions');


var RoomType = React.createClass({

  roomTypeChanged: function(e) {

    FilterActions.updateRoomType(e.target.value)
  },

  render: function() {
    return (
      <div className="room-type-container">
        <div className="room-type-title-container">
          <label>Room Type:</label><br/><br/>
        </div>
        <div className="room-type-checkbox-container">
          <div className="checkbox-container">
            <label className="checkbox-text">Whole Facility
              <input type="checkbox"
                onChange={this.roomTypeChanged}
                value={'Whole Facility'}
                defaultChecked="true"/>
            </label>
          </div>
            <div className="checkbox-container">
              <label className="checkbox-text">Shared Facility

                <input type="checkbox"
                  onChange={this.roomTypeChanged}
                  value={'Shared Facility'}
                  defaultChecked="true"
                  />
              </label>
            </div>
            <div className="checkbox-container">
              <label className="checkbox-text">Private Room
                <input type="checkbox"
                  onChange={this.roomTypeChanged}
                  value={'Private'}
                  defaultChecked="true"
                  />
              </label>

            </div>
        </div>
      </div>
    );
  }

});

module.exports = RoomType;
