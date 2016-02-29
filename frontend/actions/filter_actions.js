var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterActions = {
  updateBounds: function (value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: value
    });
  },
  updateMinSleepNum: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MIN_SLEEP_NUM,
      minSleepNum: value,
    });
  },

  updateRoomType: function (value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_ROOM_TYPE,
      roomType: value
    })
  },

  updatePriceRange: function(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_PRICE_RANGE,
      priceRange: value
    });
  },

  updateDates: function(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_DATES,
      dates: value
    })
  },

  resetDates: function() {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RESET_DATES
    });
  }
  // updateMaxSleepNum: function (value){
  //   AppDispatcher.dispatch({
  //     actionType: FilterConstants.UPDATE_MAX_SLEEP_NUM,
  //     maxSleepNum: value,
  //   });
  // }
};

module.exports = FilterActions;
