var React = require('react');
var RoomType = require('./filterComponents/room_type.jsx');
var GuestNum = require('./filterComponents/guest_num.jsx');
var StayDates = require('./filterComponents/dates.jsx');
var PriceSlider = require('./filterComponents/price_slider.jsx');
var Guests = require('./filterComponents/guest_num.jsx');

var Filters = React.createClass({

  render: function(){
    return (
      <div className="search-filters">

        <br/><hr/><br/>
          <StayDates/>
          <Guests/>
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
