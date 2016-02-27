var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var FilterConstants = require('../constants/filter_constants');

var FilterParamsStore = new Store(AppDispatcher);

var _params = { max_sleep_num: 1};
var _roomType = {wholeFacility: false, sharedFacility: false, private: false};
FilterParamsStore.params = function () {
  return Object.assign({}, _params, {roomType: _roomType});
};

// FilterParamsStore.roomType = function() {
//   return _roomType;
// };

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    // case FilterConstants.UPDATE_MAX_SLEEP_NUM:
    //   _params.maxSleepNum = payload.maxSleepNum;
    //   FilterParamsStore.__emitChange();
    //   break;
    case FilterConstants.UPDATE_MIN_SLEEP_NUM:
      _params.max_sleep_num = payload.minSleepNum;

      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_BOUNDS:
      _params.bounds = payload.bounds;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_ROOM_TYPE:

      _roomType[payload.roomType] = !_roomType[payload.roomType];
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
