var React = require('react');
var PropTypes = React.PropTypes;
var LairImage = require('../Images/lairImage.jsx');
import { styles } from './reviewItemStyle.scss';
import StarRatingComponent from 'react-star-rating-component';

var ReviewItem = React.createClass({

  render: function() {
    return (
      <div className={`${styles}`}>
        <div className={`user-info-container`}>
          <div className={`user-info`}>
            <LairImage imageType={'review-icon'}
                       image={this.props.review.user.profile_pic}
                       />
                     <p className={'username'}>
              {this.props.review.user.username}
            </p>
          </div>
          <div className={'room-rating'}>
            <StarRatingComponent
                  name={'rate1'}
                  value={this.props.review.rating}
                  starCount={5}
                  starColor={"black"}
                  emptyStarColor={'silver'}
                  editing={false}
                  />
          </div>
        </div>
        <p>
          {this.props.review.body}
        </p>
      </div>
    );
  }

});

module.exports = ReviewItem;
