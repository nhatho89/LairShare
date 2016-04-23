var React = require('react');
var FilterActions = require('../../../actions/filter_actions');
var DatePicker = require('react-datepicker');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var moment = require('moment');
var FilterStore = require('../../../stores/filter_params.js');
var Guests = require('./guest_num.jsx');


var StayDates = React.createClass({

  getInitialState: function() {
    return {
      startDate: moment(),
      endDate: moment(),
      guestNeeded: true
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

  componentWillReceiveProps: function(newProps) {
    if (this.props) {
      this.setState({
        guestNeeded: newProps.guestNeeded
      })
    }

  },

  displayDate: function() {
    this.setState({
      startDate: FilterStore.params().dates.startDate,
      endDate: FilterStore.params().dates.endDate
    })
  },

  render: function() {
    // <div className="dates-calendar">
    //   <label>Check In</label>
    //   <label>Check Out</label>
    // </div>

    var dates;

    if (this.state.guestNeeded) {

      dates = (
        <div className="filter-row">
          <div className="dates-title">
            <label>Dates</label>
          </div>

          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChangeStart} />

          <DatePicker
            selected={this.state.endDate}
            onChange={this.handleChangeEnd} />

          <Guests/>
        </div>
      )

    } else {

      dates = (
        <div className="filter-col">
          <div className="dates-title" style={{width: "100%"}}>
            <label style={{textAlign: "center"}}>Dates</label>
          </div>
          <div className="filter-row">

            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChangeStart} />

            <DatePicker
            selected={this.state.endDate}
            onChange={this.handleChangeEnd} />

          </div>
        </div>
      )
    }




    return (
      dates
      );
  }
});

module.exports = StayDates;
