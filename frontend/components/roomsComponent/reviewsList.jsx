var React = require('react');
var ReviewItem = require('./reviewItem');
import StarRatingComponent from 'react-star-rating-component';
import { styles } from './reviewListStyle.scss';

var ReviewsList = React.createClass({
  render() {
    const reviews = this.props.room.reviews;
    console.log("this.props ", this.props);
    const reviewItems = [];
    Object.keys(reviews).forEach(function(idx){
      reviewItems.push(
        <div>
          <ReviewItem key={idx} review={reviews[idx]} />
          <hr/>
        </div>
      )
    });
    return (
      <div className={`${styles}`}>
        <div className={'room-review-summary'}>
          <h3>
            {`${reviews.length}` + " Reviews"}
          </h3>
          <p className={'room-rating-avg'}>
            {"Average Rating: "}
          </p>
          <div className={'room-rating-avg'} style={{paddingLeft: '10px'}}>
            <StarRatingComponent
              name={'rate1'}
              value={Number(this.props.room.avg_rating)}
              starCount={5}
              starColor={"black"}
              emptyStarColor={'silver'}
              editing={false}
              />
          </div>
        </div>
        {reviewItems}
      </div>
    );
  }
});
module.exports = ReviewsList;
