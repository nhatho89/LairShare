var React = require('react');
var RoomType = require('./filterComponents/room_type.jsx');
var StayDates = require('./filterComponents/dates.jsx');
var PriceSlider = require('./filterComponents/price_slider.jsx');
var Guests = require('./filterComponents/guest_num.jsx');
// var Bounds = require('./filterComponents/bounds.jsx');

var Filters = React.createClass({

  render: function(){
    // <Bounds/>
    return (
      <div className="search-filters">

        <hr/>
          <StayDates/>
        <hr/>
          <Guests/>
        <hr/>
          <PriceSlider/>
        <hr/>
          <RoomType/>
        <hr/>
      </div>
    );
  }
});

module.exports = Filters;
