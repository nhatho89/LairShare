var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var FilterConstants = require('../constants/filter_constants');

var FilterParamsStore = new Store(AppDispatcher);

// var _params = { max_sleep_num: 1};
// var _roomType = {wholeFacility: false, sharedFacility: false, private: false};
// var _priceRange = {min: 50, max: 450 };


var _params = {
  max_sleep_num: 1,

  bounds: {
    northEast: {
      lat: 37,
      lng: 122
    },

    southWest: {
      lat: 36.9,
      lng: 121.9
    }
  },
  dates: {
    checkin: null,
    checkout: null
  },

  roomType: {
    wholeFacility: true,
    sharedFacility: true,
    private: true
  },

  priceRange: {
    min: 50,
    max: 400
  }
};

FilterParamsStore.params = function () {
  return _params
  // Object.assign({}, _params, {roomType: _roomType});
  // Object.assign({}, _params, {priceRange: _priceRange});
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
      _params.roomType[payload.roomType] = !_params.roomType[payload.roomType];
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_PRICE_RANGE:
      _params.priceRange = payload.priceRange;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_DATES:
      _params.dates = payload.dates;
      FilterParamsStore.__emitChange();
      break;
      case FilterConstants.RESET_DATES:
        _params.dates = {checkin: null, checkout: null};
        FilterParamsStore.__emitChange();
        break;
  }
};

module.exports = FilterParamsStore;
