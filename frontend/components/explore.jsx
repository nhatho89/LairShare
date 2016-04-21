var React = require('react');
var Link = require('react-router').Link;
var City = require('./city.jsx');

var Explore = React.createClass({

  render: function() {
    return (
      <div className="explore-container">

        <div className="explore-title">
          <div>
            <h1>
              EXPLORE
            </h1>
            <br/>
          </div>
        </div>

        <div className="explore-cities">
          <div className="explore-city">
            <City cityValue="San-Francisco" name="San Francisco" city="sf"></City>
          </div>

          <div className="explore-city">

            <City cityValue="New-York-City" name="New York City" city="nyc"></City>
          </div>

          <div className="explore-city">

            <City cityValue="Saint-Martin" name="Caribbean" city="carrib"></City>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Explore;
