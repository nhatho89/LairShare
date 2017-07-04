var React = require('react');
var ReactRouter = require('react-router');
import StarRatingComponent from 'react-star-rating-component';

var IndexItem = React.createClass({
  mixins: [ReactRouter.history],

  render: function(){
    var room = this.props.room;

    return (
      <div className="room-index-item-container room-row room-wrap room-center" onClick={this.props.onClick}>
        <div className="room-index-item-inner-container room-col">
          <div className="room-image room-row room-center">
            <img src={room.primary_photo_url}/>
          </div>
          <div className="room-detail room-col">
            <p className="room-detail-title">
              {room.title}<br/>
              Price: ${room.price}
            </p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
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
      </div>
    );
  }
});

module.exports = IndexItem;
