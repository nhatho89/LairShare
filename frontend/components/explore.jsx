var React = require('react');
var Link = require('react-router').Link;
// var History = require('react-router').History;
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

        <div className="city-title">
          <h4 className="city-title-name">
            San Francisco
          </h4>
          <h4 className="city-title-name">
            New York City
          </h4>
          <h4 className="city-title-name">
            Carribeans
          </h4>

        </div>

        <div className="explore-cities">
          <div className="explore-city">
            <City cityValue="San-Francisco" city="sf"></City>
          </div>

          <div className="explore-city">

            <City cityValue="New-York-City" city="nyc"></City>
          </div>

          <div className="explore-city">

            <City cityValue="Saint-Martin" city="carrib"></City>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Explore;
