var React = require('react');
var FilterActions = require('../actions/filter_actions');

var Filters = React.createClass({
  // maxSleepNumChanged: function(e){
  //   FilterActions.updateMaxSleepNum(e.target.value);
  // },
  minSleepNumChanged: function (e) {
    FilterActions.updateMinSleepNum(e.target.value);
  },
  // currentMax: function(){
  //   return this.props.filterParams.maxSleepNum;
  // },
  currentMin: function(){
    return this.props.filterParams.minSleepNum;
  },
  updateSleepNum: function (min) {
    FilterActions.updateParams({
      max_sleep_num: {min: min}
    });
  },

  roomTypeChanged: function(e) {

    FilterActions.updateRoomType(e.target.value)
  },

  currentRoomType: function(roomType) {
    return this.props.filterParams.type_id;
  },

  render: function(){
    // <label>Maximum Sleep Num</label>
    // <input type="number"
    //   onChange={this.maxSleepNumChanged}
    //   value={this.currentMax()}/>
    return (
      <div>
        <label>Minimum Sleep Num</label>
        <input type="number"
          onChange={this.minSleepNumChanged}
          value={this.currentMin()}/>
        <br/>
        <label>Room Type:</label><br/>
        <label>Whole Facility
          <input type="checkbox"
            onChange={this.roomTypeChanged}
            value={'wholeFacility'}/>
        </label>
        <label>Shared Facility
          <input type="checkbox"
            onChange={this.roomTypeChanged}
            value={'sharedFacility'}/>
        </label>
        <label>Private Room
          <input type="checkbox"
            onChange={this.roomTypeChanged}
            value={'private'}/>
        </label><br/>
      </div>
    );
  }
});

module.exports = Filters;
