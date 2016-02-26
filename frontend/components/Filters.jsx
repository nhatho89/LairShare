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
      </div>
    );
  }
});

module.exports = Filters;
