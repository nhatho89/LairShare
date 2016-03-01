var React = require('react');
var FilterActions = require('../../actions/filter_actions');


var RoomType = React.createClass({

  roomTypeChanged: function(e) {

    FilterActions.updateRoomType(e.target.value)
  },

  currentRoomType: function(roomType) {

    return this.props.filterParams.type_id;
  },

  render: function() {
    return (
      <div className="room-type-container">
        <div className="room-type-title-container">
          <label>Room Type:</label><br/><br/>
        </div>
        <div className="room-type-checkbox-container">
          <div>
            <label>Whole Facility
              <input type="checkbox"
                onChange={this.roomTypeChanged}
                value={'wholeFacility'}
                defaultChecked="true"/>
            </label>
          </div>
            <div>
              <label>Shared Facility

                <input type="checkbox"
                  onChange={this.roomTypeChanged}
                  value={'sharedFacility'}
                  defaultChecked="true"
                  />
              </label>
            </div>
            <div>
              <label>Private Room
                <input type="checkbox"
                  onChange={this.roomTypeChanged}
                  value={'private'}
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
