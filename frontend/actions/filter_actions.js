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

  updateStartDates: function(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_START_DATES,
      dates: value
    })
  },

  updateEndDates: function(value) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_END_DATES,
      dates: value
    })
  },
};

module.exports = FilterActions;
