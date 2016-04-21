var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var FilterConstants = require('../constants/filter_constants');
var moment = require('moment');

var FilterParamsStore = new Store(AppDispatcher);

var _params = {
  max_sleep_num: 100,

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
    startDate: moment(),
    endDate: moment().add(3,'days')
  },

  roomType: {
    "Whole Facility": true,
    "Shared Facility": true,
    "Private": true
  },

  priceRange: {
    min: 1000,
    max: 10000
  }
};

FilterParamsStore.params = function () {
  if (typeof _params.dates.startDate === 'string') {
    _params.dates.startDate = moment(_params.dates.startDate)
  }

  if (typeof _params.dates.endDate === 'string') {
    _params.dates.endDate = moment(_params.dates.endDate)
  }

  return _params;

};



FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType){

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
    case FilterConstants.UPDATE_START_DATES:
      _params.dates.startDate = moment(payload.dates.startDate);
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_END_DATES:
      _params.dates.endDate = moment(payload.dates.endDate);
      FilterParamsStore.__emitChange();
      break;

  }
};

window.FilterParamsStore = FilterParamsStore;
module.exports = FilterParamsStore;
