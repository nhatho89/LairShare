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
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
            <option value="7">7 Guests</option>
            <option value="8">8 Guests</option>
            <option value="9">9 Guests</option>

          </select>
        </div>

      </div>
    );
  }

});

module.exports = GuestNum;
