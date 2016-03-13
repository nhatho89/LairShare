var React = require('react');
// var FilterActions = require('../actions/filter_actions');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var DateTools = require('../../helpers/date.js');
// var DatePicker = require('react-datepicker');
// var moment = require('moment');
var RoomType = require('./filterComponents/room_type.jsx');
var GuestNum = require('./filterComponents/guest_num.jsx');
var StayDates = require('./filterComponents/dates.jsx');
var PriceSlider = require('./filterComponents/price_slider.jsx');

var Filters = React.createClass({
  // mixins: [LinkedStateMixin],



  render: function(){


    return (
      <div className="search-filters">

        <br/><hr/><br/>
          <StayDates/>
        <br/><hr/><br/>
          <PriceSlider/>
        <br/><hr/><br/>
          <RoomType/>
        <br/><hr/><br/>
      </div>
    );
  }
});

module.exports = Filters;
