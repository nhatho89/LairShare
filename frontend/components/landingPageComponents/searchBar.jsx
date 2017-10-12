var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;

var SearchBar = React.createClass({
mixins: [History],

getInitialState: function() {
  return ({
    loc: "",
    placeholder: "Where do you want to go?",
    showLoading: false
  });
},

handleSearch: function(e) {
  if (arguments.length > 0) {
    e.preventDefault();
  }

  if (this.state.loc === ""){
    this.setState({
      placeholder: "Please set location"
    });
  } else {
    setTimeout(this.redirectToSearch, 1000);
    this.setState({
      showLoading: true
    })
  }
},

redirectToSearch: function() {
  var loc = this.state.loc.replace(/\W+/g, "-");
  this.history.push({pathname: 'search/' + loc});
},

handleLocChange: function(e) {
  this.setState({
    loc: this.refs.locinput.value
  });
},

searchBarMoveUp: function() {
  $(".search-bar").animate({'bottom': '50px'},1000);
},

searchBarMoveBack: function() {
  $(".search-bar").animate({'bottom': '0px'},500);
},

render: function() {

  var searchIcon = (
    <img className="search-icon" src="assets/icons/search.png" onClick={this.handleSearch}/>
  );

  var design = (
    <div className="input-space">
      <form className="input-group" id="searchbar-form" role="form" onSubmit={this.handleSearch}>
        <input
          type="text"
          className="form-control"
          id="landing-search-input"
          onChange={this.handleLocChange}
          placeholder={this.state.placeholder}
          ref="locinput"
          onFocus={this.searchBarMoveUp}
          onBlur={this.searchBarMoveBack}
          />
      </form>
    </div>
  );

  return (

    <div className="search-bar">
      <div className="center">
        {design}
        <div className="search-icon-container">
          <button className="search-button" onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );}
});

module.exports = SearchBar;
