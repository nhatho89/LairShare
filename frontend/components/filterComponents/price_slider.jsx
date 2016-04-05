var React = require('react');
var FilterActions = require('../../actions/filter_actions');

var PriceSlider = React.createClass({

  loadPriceRange: function() {
    $("#search-index-price-range").slider({
      range: true,
      min: 1000,
      max: 10000,
      values: [2000,9000],
      slide: function(event,ui) {
        var left = (ui.values[0]/5).toFixed(2) + "%";
        var width = ((ui.values[1] - ui.values[0])/5).toFixed(2) + "%";
        $("#min-max-range").css({left: left, width: width})
        $("#search-index-amount").val("$"+ui.values[0]+"-$"+ui.values[1]);
      },

      stop: function(event, ui) {
        FilterActions.updatePriceRange({
          min: ui.values[0],
          max: ui.values[1]
        })
      }
    });
    $("#search-index-amount").val("$"+$("#search-index-price-range").slider("values",0)+"-$"+$("#search-index-price-range").slider("values",1));
  },

  componentDidMount: function() {
    this.loadPriceRange();
  },

  render: function() {
    $("#search-index-price-range").css('z-index', 0);

    return (
      <div className="price-range-container">
          <div className="price-range-title-container">
            <label>Price Range</label><br/>
          </div>
          <div className="search-index-amount">
            <input type="text" id="search-index-amount" readOnly="true" style={{border:'0', color:'#f6931f', fontWeight:'bold', background: "transparent"}} />
          </div><br/>
          <div className="price-range-slider-container">
            <div id="search-index-price-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
              <div id="min-max-range" className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '15%', width: '30%'}}>
              </div>
              <span
                 className="ui-slider-handle ui-state-default ui-corner-all"
                 tabIndex="0"
                 style={{left: '15%'}}>
              </span>
              <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{left: '60%'}}>
              </span>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = PriceSlider;
