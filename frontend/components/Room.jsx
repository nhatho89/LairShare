// var React = require('react');
// var ReactRouter = require('react-router');
// var Review = require('./Review');
// // var Link = ReactRouter.Link
//
// //children of RoomShow
//
// var Room = React.createClass({
//
//   render: function () {
//
//     var Link = ReactRouter.Link;
//     if (this.props.room) {
//       var components = (
//         <div className="left-inner-container">
//           <div className="keep-searching-container">
//             <Link to="/search/San-Francisco">Keep Searching!</Link>
//           </div>
//           <div className="room-detail-container">
//             <ul className="room-detail-elements">
//               <li>Description: {this.props.room.description}</li>
//               <li>Sleeps: {this.props.room.max_sleep_num}</li>
//               <li>Rating: {this.props.room.average_rating || "No reviews yet"}</li>
//               <li>Latitude: {this.props.room.lat}</li>
//               <li>Longitude: {this.props.room.lng}</li>
//             </ul>
//           </div>
//         </div>);
//       } else {
//         components = <div></div>;
//       };
//     // var reviews = this.props.room.reviews || [];
//
//     return (
//       <div>
//         {components}
//       </div>
//   );}
// });
//
// // <div className="reviews">
// //   <h3>Reviews</h3>
// //   {reviews.map(function (review) {
// //     return <Review key={review.id} {...review} />;
// //   })}
// // </div>
// module.exports = Room;
