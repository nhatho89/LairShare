var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var _params = { minSleepNum: 1, maxSleepNum: 10 };
var FilterConstants = require('../constants/filter_constants');

var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function () {
  return _params;
};

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case FilterConstants.UPDATE_MAX_SLEEP_NUM:
      _params.maxSleepNum = payload.maxSleepNum;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_MIN_SLEEP_NUM:
      _params.minSleepNum = payload.minSleepNum;

      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_BOUNDS:
      _params.bounds = payload.bounds;
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
