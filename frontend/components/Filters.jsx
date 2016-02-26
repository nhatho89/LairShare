var React = require('react');
var FilterActions = require('../actions/filter_actions');

var Filters = React.createClass({
  maxSleepNumChanged: function(e){
    FilterActions.updateMaxSleepNum(e.target.value);
  },
  minSleepNumChanged: function (e) {
    FilterActions.updateMinSleepNum(e.target.value);
  },
  currentMax: function(){
    return this.props.filterParams.maxSleepNum;
  },
  currentMin: function(){
    return this.props.filterParams.minSleepNum;
  },
  updateSleepNum: function (min, max) {
    FilterActions.updateParams({
      max_sleep_num: {min: min, max: max}
    });
  },
  render: function(){
    return (
      <div>
        <label>Minimum Sleep Num</label>
        <input type="number"
          onChange={this.minSleepNumChanged}
          value={this.currentMin()}/>
         <br/>
        <label>Maximum Sleep Num</label>
        <input type="number"
          onChange={this.maxSleepNumChanged}
          value={this.currentMax()}/>
      </div>
    );
  }
});

module.exports = Filters;
