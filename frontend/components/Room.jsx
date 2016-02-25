var React = require('react');
var ReactRouter = require('react-router');
var Review = require('./Review');

var Room = React.createClass({
  render: function () {
    var reviews = this.props.room.reviews || [];
    var Link = ReactRouter.Link;
    return (
      <div>
        <ul>
          <img height="200px" src={this.props.room.picture_url}/>
          <li>Rating: {this.props.room.average_rating || "No reviews yet"}</li>
          <li>Description: {this.props.room.description}</li>
          <li>Seats: {this.props.room.seating}</li>
          <li>Latitude: {this.props.room.lat}</li>
          <li>Longitude: {this.props.room.lng}</li>
        </ul>
        <div className="reviews">
          <h3>Reviews</h3>
          {reviews.map(function (review) {
           return <Review key={review.id} {...review} />;
         })}
        </div>
      </div>
    );
  }
});

module.exports = Room;
