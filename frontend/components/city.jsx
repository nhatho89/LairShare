var React = require('react');
var History = require('react-router').History;

var City = React.createClass({
  mixins: [History],

  handleClick: function(event) {
    event.preventDefault();
    this.history.push({pathname: '/search/' + this.props.cityValue})
  },

  mouseEnter: function(event) {
    event.preventDefault();
    $("#" + this.props.city + "-1").css('z-index', 2);

  },

  mouseLeave: function(event) {
    event.preventDefault();
    $("#" + this.props.city + "-1").css('z-index', -1);
  },

  render: function() {
    return (
      <div className="city" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div className="city-overlap">
          <img className="city-image" id={this.props.city + "-1"} onClick={this.handleClick} src={"/assets/" + this.props.city + "-1"}/>

        </div>
        <div className="city-overlap">

          <img className="city-image-1" onClick={this.handleClick} src={"/assets/" + this.props.city + "-2"}/>
        </div>
      </div>
    );
  }

});

module.exports = City;
