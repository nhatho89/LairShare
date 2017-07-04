var React = require('react');
var PropTypes = React.PropTypes;
var LairImage = require('../Images/lairImage.jsx');
import { styles } from './reviewItemStyle.scss';
import Rater from 'react-rater';

var ReviewItem = React.createClass({

  render: function() {
    return (
      <div className={`${styles}`}>
        <div className={`user-info-container`}>
          <div className={`user-info`}>
            <LairImage imageType={'review-icon'} image={this.props.review.user.profile_pic}/>
            <p>
              {this.props.review.user.username}
            </p>
          </div>
          <div>
            <Rater total={5} rating={3} interactive={false} onRate={function(){}}/>
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
