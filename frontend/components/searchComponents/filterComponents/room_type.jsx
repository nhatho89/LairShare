var React = require('react');
var FilterActions = require('../../../actions/filter_actions');

var RoomType = React.createClass({

  roomTypeChanged: function(e) {

    FilterActions.updateRoomType(e.target.value)
  },

  render: function() {
    return (
      <div className="room-type-row">

        <div className="room-type-title-container">
          <label><strong>Room Type</strong></label><br/><br/>
        </div>

          <div className="checkbox-container">
            <label className="checkbox-text">
              <i className="fa fa-building" aria-hidden="true"></i>&nbsp;Whole Facility
              <input type="checkbox"
                onChange={this.roomTypeChanged}
                value={'Whole'}
                defaultChecked="true"/>
            </label>
          </div>

          <div className="checkbox-container">
            <label className="checkbox-text">
              <i className="fa fa-home" aria-hidden="true"></i>&nbsp;Shared Facility
              <input type="checkbox"
                onChange={this.roomTypeChanged}
                value={'Shared'}
                defaultChecked="true"
                />
            </label>
          </div>

          <div className="checkbox-container">
            <label className="checkbox-text">
              <i className="fa fa-lock" aria-hidden="true"></i>&nbsp;Private Room
              <input type="checkbox"
                onChange={this.roomTypeChanged}
                value={'Private'}
                defaultChecked="true"
                />
            </label>
          </div>

      </div>
    );
  }

});

module.exports = RoomType;
