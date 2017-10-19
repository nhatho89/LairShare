var React = require('react');
var PropTypes = React.PropTypes;
var SessionStore = require('../../stores/sessionStore');
var ApiUtil = require('../../util/apiUtil');
import { styles } from './reviewFormStyle.scss';
import StarRatingComponent from 'react-star-rating-component';

var ReviewForm = React.createClass({
  getInitialState: function () {
    return {
      rating: 5,
      body: "Write a review",
      reviewStatus: "incomplete"
    };
  },

  handleSubmit: function(event){
    event.preventDefault();
    if (!SessionStore.currentUser().username) {
      this.props.openSigninModal();
    } else {
      const review = {
        room: this.props.room.id,
        user: SessionStore.currentUser().id,
        rating: this.state.rating,
        body: this.state.body
      }
      const callback = () => {
        ApiUtil.fetchARoom(this.props.room.id)
        this.setState({
          reviewStatus: "complete"
        })
      };

      ApiUtil.createReview(review, callback);

    }
  },

  onStarClick(value) {
    this.setState({
      rating: value
    })
  },

  handleTextChange(e) {
    e.preventDefault();
    this.setState({
      body: e.target.value
    })
  },

  _renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Rate This Room</label>
        <div className={'room-rating-avg'} style={{paddingLeft: '10px'}}>
          <StarRatingComponent
            name={'rate1'}
            value={this.state.rating}
            starCount={5}
            starColor={"black"}
            emptyStarColor={'silver'}
            onStarClick={this.onStarClick}
            editing={true}
            />
        </div>

        <br/>

        <label>Comment</label>
        <br/>
        <textarea
          style={{minHeight: "100px", maxHeight:"100px", width: "100%"}}
          value={this.state.body}
          onChange={this.handleTextChange}/>
        <br/>
        <input type="submit"/>
      </form>
    )
  },

  render: function() {
    if (this.state.reviewStatus == "incomplete") {
      return (
        <div className={`${styles}`}>
          {this._renderForm()}
        </div>

      );
    } else if (this.state.reviewStatus == "complete"){
      return (
        <div>
          Thank you for submitting a review!
        </div>
      )
    }
  }

});

module.exports = ReviewForm;
