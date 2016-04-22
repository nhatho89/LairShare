var React = require('react');
var FilterActions = require('../../../actions/filter_actions');
var DatePicker = require('react-datepicker');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var moment = require('moment');
var FilterStore = require('../../../stores/filter_params.js');

var StayDates = React.createClass({

  getInitialState: function() {
    return {
      startDate: moment(),
      endDate: moment()
    }
  },

  handleChangeStart: function(startDate) {

    var newStartDate = startDate.clone();

    FilterActions.updateEndDates({
      endDate: newStartDate.add(3,'days')
    });

    FilterActions.updateStartDates({
      startDate: startDate
    });
  },

  handleChangeEnd: function(endDate) {

    FilterActions.updateEndDates({
      endDate: endDate
    })
  },

  componentDidMount: function() {
    this.displayListener = FilterStore.addListener(this.displayDate);
  },

  componentWillUnmount: function() {
    this.displayListener.remove();
  },

  displayDate: function() {
    this.setState({
      startDate: FilterStore.params().dates.startDate,
      endDate: FilterStore.params().dates.endDate
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
            selected={this.state.startDate}
            onChange={this.handleChangeStart} />

          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleChangeEnd} />
        </div>
      </div>
      );
  }
});

module.exports = StayDates;