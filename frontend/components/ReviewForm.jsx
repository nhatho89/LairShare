// var React = require('react');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
// var ReactRouter = require('react-router');
// var ApiUtil = require('../util/apiUtil');
//
// var ReviewForm = React.createClass({
//   mixins: [LinkedStateMixin, ReactRouter.history],
//   getInitialState: function () {
//     return { rating: 5, body: "" };
//   },
//   navigateToRoomShow: function () {
//     var roomUrl = "/rooms/" + this.props.params.roomId;
//     this.props.history.pushState(null, roomUrl);
//   },
//   handleCancel: function(event){
//     event.preventDefault();
//     this.navigateToRoomShow();
//   },
//   handleSubmit: function(event){
//     event.preventDefault();
//     var review = $.extend(
//       {},
//       this.state,
//       { room_id: this.props.params.roomId }
//     );
//     ApiUtil.createReview(review);
//     this.navigateToRoomShow();
//   },
//   render: function () {
//     return (
//       <div className="review-form">
//         <form onSubmit={this.handleSubmit}>
//           <label>Rating</label>
//           <br/>
//           <input type="number" valueLink={this.linkState('rating')}/>
//           <br/>
//
//           <label>Comment</label>
//           <br/>
//           <textarea
//             cols='30'
//             rows='10'
//             valueLink={this.linkState('body')}></textarea>
//           <br/>
//           <input type="submit"/>
//         </form>
//         <button onClick={this.handleCancel}>Cancel</button>
//       </div>
//     );
//  }
// });
//
// module.exports = ReviewForm;
