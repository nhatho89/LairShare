var React = require('react');
var FilterActions = require('../../actions/filter_actions');

var GuestNum = React.createClass({

  minSleepNumChanged: function (e) {
    FilterActions.updateMinSleepNum(e.target.value);
  },

  render: function() {
    return (
      <div className="guest-num-container">
        <div className="guest-num-title-container">
          <label>Number of Guests</label><br/>
        </div>

        <div className="guest-num-selection-container">
          <select
            className="Guests"
            onChange={this.minSleepNumChanged}
            >
            <option value="100">100 Guest</option>
            <option value="200">200 Guests</option>
            <option value="300">300 Guests</option>
            <option value="400">400 Guests</option>
            <option value="500">500 Guests</option>
            <option value="600">600 Guests</option>
            <option value="700">700 Guests</option>
            <option value="800">800 Guests</option>


          </select>
        </div>

      </div>
    );
  }

});

module.exports = GuestNum;
