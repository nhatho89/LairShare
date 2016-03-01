var React = require('react');
var FilterActions = require('../../actions/filter_actions');
var DateTools = require('../../helpers/date.js');
var DatePicker = require('react-datepicker');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var moment = require('moment');

var StayDates = React.createClass({

  handleChangeStart: function(startDate) {
    debugger
    if (startDate < moment()._d) {
      alert("Pick a valid date!")
    } else if (startDate && this.props.endDate) {
      console.log("helo");
    };

    FilterActions.updateStartDates({
      startDate: startDate._d.getTime()
    })
  },

  handleChangeEnd: function(endDate) {

    // if (endDate < (new Date(this.props.startDate).toUTCString())) {
    //   alert("Pick a valid date!")
    // };

    FilterActions.updateEndDates({
      endDate: endDate._d.getTime()
    })
  },

  render: function() {
    return (
      <div>

        <div className="dates-title">
          <label>Dates</label>
        </div>

        <div className="dates-calendar">
          <label>Check In</label>
          <label>Check Out</label>

        </div>

        <div className="calendar-filter">
          <DatePicker
            selected={this.props.startDate}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            onChange={this.handleChangeStart} />
          <DatePicker
            selected={this.props.endDate}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            onChange={this.handleChangeEnd} />
        </div>
      </div>
      );
  }

});

module.exports = StayDates;
