var React = require('react');
var FilterActions = require('../actions/filter_actions');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var DateTools = require('../../helpers/date.js');


var Filters = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    var dates = this.props.filterParams.dates;
    return ({
      checkin: dates.checkin,
      checkout: dates.checkout,
      dateRange: (dates.checkin === null ? "" : dates.checkin + " - " + dates.checkout)
    });
  },
  // maxSleepNumChanged: function(e){
  //   FilterActions.updateMaxSleepNum(e.target.value);
  // },
  minSleepNumChanged: function (e) {
    FilterActions.updateMinSleepNum(e.target.value);
  },
  // currentMax: function(){
  //   return this.props.filterParams.maxSleepNum;
  // },
  currentMin: function(){

    return this.props.filterParams.minSleepNum;
  },
  updateSleepNum: function (min) {
    FilterActions.updateParams({
      max_sleep_num: {min: min}
    });
  },

  roomTypeChanged: function(e) {

    FilterActions.updateRoomType(e.target.value)
  },

  currentRoomType: function(roomType) {
    return this.props.filterParams.type_id;
  },


  loadPriceRange: function() {
    $("#search-index-price-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [50,450],
      slide: function(event,ui) {
        var left = (ui.values[0]/5).toFixed(2) + "%";
        var width = ((ui.values[1] - ui.values[0])/5).toFixed(2) + "%";
        // console.log(left + " " + width)

        //grayscale on the slide bar will update along with the sliders
        $("#min-max-range").css({left: left, width: width});

        $("#search-index-amount").val("$"+ui.values[0]+"-$"+ui.values[1]);
      },

      stop: function(event, ui) {
        // console.log("stopped"+ui.values[0]+ui.values[1])
        FilterActions.updatePriceRange({
          min: ui.values[0],
          max: ui.values[1]
        })
      }

    });
    //displays default prices
    $("#search-index-amount").val("$"+$("#search-index-price-range").slider("values",0)+"-$"+$("#search-index-price-range").slider("values",1));
  },

  componentDidMount: function() {
    this.loadPriceRange();
    this.loadDateRangePicker();

  },


  // need to refactor: 1. validate date format, 2. validate checkin<checkout
  updateCheckin: function(dateStr) {
    var checkin = this.validateCheckin(dateStr);
    // debugger;
    if (this.state.checkout !== null
       && DateTools.compareDates(checkin, this.state.checkout) === -1) {
        this.setState({
          checkin: checkin
        });
        this.updateDates();
    } else {
      this.setState({
        checkin: checkin,
        checkout: null,
        focus: "checkout"
      });
    }
  },

  updateCheckout: function(dateStr) {
    // debugger;
    var checkout = this.validateCheckout(dateStr);
    if (this.state.checkin !== null
       && DateTools.compareDates(this.state.checkin, checkout) === -1) {
        this.setState({
          checkout: checkout
        });
        this.updateDates();
    } else {
      this.setState({
        checkin: null,
        checkout: checkout,
        focus: "checkin"
      });
    }
  },

  validateCheckin: function(dateStr) {
    if (DateTools.inclBetween(dateStr, this.minCheckin, this.maxCheckout)) {
      return dateStr;
    } else {
      return this.defaultCheckin;
    }
  },

  validateCheckout: function(dateStr) {
    if (DateTools.inclBetween(dateStr, this.minCheckin, this.maxCheckout)) {
      return dateStr;
    } else {
      return this.defaultCheckout;
    }
  },

  updateDates: function(checkin, checkout) {
    FilterActions.updateDates({
      checkin: this.state.checkin,
      checkout: this.state.checkout
    })
  },



  loadDateRangePicker: function() {
    var minDate = DateTools.todayStr();
    var maxDate = DateTools.yearsAfterDateStr(3, minDate);
    var inputDomNode = this.refs.searchDateRangeInput;
    var _this = this;
    var dateRangeOptions = {
      "autoApply": true,
      // "opens": "left",
      "showDropdowns": true,
      "minDate": minDate,
      "maxDate": maxDate,
      "autoUpdateInput": false
    }

    if(this.state.dateRange !== "") {
      dateRangeOptions.autoUpdateInput = true;
      dateRangeOptions.startDate = this.state.checkin;
      dateRangeOptions.endDate = this.state.checkout;
    }

    $(inputDomNode).daterangepicker(dateRangeOptions);

    $(inputDomNode).on('hide.daterangepicker', function(ev, picker) {
      console.log('hide')
      var checkin = picker.startDate.format('MM/DD/YYYY');
      var checkout = picker.endDate.format('MM/DD/YYYY');
      var momentToday = moment().startOf('day');
      var validInput = ( moment(checkin, "MM-DD-YYYY").diff(momentToday) >= 0
                        && moment(checkout, "MM-DD-YYYY").diff(momentToday) > 0
                        && moment(checkout, "MM-DD-YYYY").diff(moment(checkin, "MM-DD-YYYY")) > 0
                      );
      if (validInput) {
        _this.updateFilterParams(checkin, checkout);
        _this.updateDateRangeInput(checkin, checkout);
      } else {
        console.log('invalid');
        _this.dateRange = "";
        // debugger;
        $(_this.refs.searchDateRangeInput).data('daterangepicker').autoUpdateInput = false;
        $(_this.refs.searchDateRangeInput).val("");
        FilterActions.resetDates();
      }
    });
  },

  updateFilterParams: function(checkin, checkout) {
    FilterActions.updateDates({
      checkin: checkin,
      checkout: checkout
    });
  },

  updateDateRangeInput: function(checkin, checkout) {
    console.log(checkin + checkout);
    $(this.refs.searchDateRangeInput).data('daterangepicker').autoUpdateInput = true;
    $(this.refs.searchDateRangeInput).data('daterangepicker').setStartDate(checkin);
    $(this.refs.searchDateRangeInput).data('daterangepicker').setEndDate(checkout);
    this.dateRange = checkin + " - " + checkout;
    this.setState({
      checkin: checkin,
      checkout: checkout,
      disableInput: true
    });
  },

  // focus the text input field to open the DateRangePicker when calendar glyphicon is clicked
  openDateRangePicker: function() {
    this.refs.searchDateRangeInput.focus();
  },


  // <label htmlFor="amount">Price range:</label>
  // <input type="text" id="amount"/>
  //
  //
  // <div id="slider-range"></div>

  render: function(){
    // <label>Maximum Sleep Num</label>
    // <input type="number"
    //   onChange={this.maxSleepNumChanged}
    //   value={this.currentMax()}/>
    return (
      <div>


        <div className="col-md-8 row-space-1-sm">
                  <div className="input-group">
                    <span className="input-group-btn span-btn-stylefix">
                      <button
                        className="btn btn-secondary btn-stylefix"
                        type="button"
                        onClick={this.openDateRangePicker}>
                        <i className="glyphicon glyphicon-calendar fa fa-calendar" />
                      </button>
                    </span>
                    <input
                      name="daterange"
                      id="search-index-daterange"
                      ref="searchDateRangeInput"
                      className="form-control input-stylefix"
                      type="text"
                      autoComplete="off"
                      placeholder="Check In - Check Out"
                      value={this.dateRange}
                      style={{textAlign:"center"}}/>
                  </div>
                </div>


        <div className="row row-filter">
            <div className="col-lg-2 col-md-12 text-center-sm text-center-md row-space-sm-1">
              <label>Price Range</label>
              <input type="text" id="search-index-amount" readOnly="true" style={{border:'0', color:'#f6931f', fontWeight:'bold', background: "transparent"}} />
            </div>
            <div className="col-lg-9 col-md-12 price-range-container">
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





        <label>Minimum Sleep Num</label>
        <input type="number"
          onChange={this.minSleepNumChanged}
          value={this.currentMin()}/>
        <br/>
        <label>Room Type:</label><br/>
        <label>Whole Facility
          <input type="checkbox"
            onChange={this.roomTypeChanged}
            value={'wholeFacility'}
            defaultChecked="true"
            />
        </label>
        <label>Shared Facility
          <input type="checkbox"
            onChange={this.roomTypeChanged}
            value={'sharedFacility'}
            defaultChecked="true"
            />
        </label>
        <label>Private Room
          <input type="checkbox"
            onChange={this.roomTypeChanged}
            value={'private'}
            defaultChecked="true"
            />
        </label><br/>
      </div>
    );
  }
});

module.exports = Filters;
