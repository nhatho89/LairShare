var React = require('react');
var RoomType = require('./filterComponents/room_type.jsx');
var StayDates = require('./filterComponents/dates.jsx');
var PriceSlider = require('./filterComponents/price_slider.jsx');

var Filters = React.createClass({

  render: function(){
    // <Bounds/>
    return (
      <div className="search-filters">
        <div className="dates-guests">
          <hr/>
          <StayDates
            guestNeeded={true}
            />
        </div>
        <hr/>
          <RoomType/>
        <hr/>
          <PriceSlider/>
        <hr/>
      </div>
    );
  }
});

module.exports = Filters;
