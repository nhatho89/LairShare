// var React = require('react');
// var ApiUtil = require('../util/apiUtil');
// var LinkedStateMixin = require('react-addons-linked-state-mixin');
//
// var RoomForm = React.createClass({
//   mixins: [LinkedStateMixin],
//   contextTypes: {
//     router: React.PropTypes.func
//   },
//   getInitialState: function(){
//     return {
//       description: "",
//       max_sleep_num: 2
//     };
//   },
//   handleSubmit: function(event){
//     event.preventDefault();
//     var room = Object.assign({}, this.state, this._coords());
//     ApiUtil.createRoom(room);
//     this.navigateToSearch();
//   },
//   navigateToSearch: function(){
//     this.props.history.pushState(null, "/");
//   },
//   handleCancel: function(event){
//     event.preventDefault();
//     this.navigateToSearch();
//   },
//   _coords: function(){
//     return this.props.location.query;
//   },
//   render: function(){
//     var lat = this._coords().lat, lng = this._coords().lng;
//     return (
//         <div>
//           <h3>Create A Room!</h3>
//           <form onSubmit={this.handleSubmit}>
//             <label>Description</label>
//             <input type="text" valueLink={this.linkState('description')}/>
//             <br/>
//             <label>Number of Beds</label>
//             <input min='0' type="number" valueLink={this.linkState('max_sleep_num')}/>
//             <br/>
//             <label>Latitude</label>
//             <input type="text" disabled="true" value={lat}/>
//             <br/>
//             <label>Longitude</label>
//             <input type="text" disabled="true" value={lng}/>
//             <br/>
//             <input type="submit" value="create room"/>
//           </form>
//           <button onClick={this.handleCancel}>Cancel</button>
//         </div>
//     );
//   }
// });
//
// module.exports = RoomForm;
