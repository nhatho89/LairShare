var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterActions = {
  updateBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: bounds
    });
  },
  updateMinSleepNum: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_MIN_SLEEP_NUM,
      minSleepNum: value,
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
