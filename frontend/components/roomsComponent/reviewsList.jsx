var React = require('react');
var ReviewItem = require('./reviewItem');

var ReviewsList = React.createClass({
  render() {
    const reviews = this.props.room.reviews;
    console.log("this.props ", this.props);
    const reviewItems = [];
    Object.keys(reviews).forEach(function(idx){
      reviewItems.push(
        <ReviewItem key={idx} review={reviews[idx]} />
      )
    });
    return (
      <div>
        Reviews
        <div>
          {reviewItems}
        </div>
      </div>
    );
  }
});
module.exports = ReviewsList;
