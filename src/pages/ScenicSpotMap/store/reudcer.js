import * as ActionTypes from './ActionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
 lng: 121.5,
 lat: 25.08,
 zoom: 9,
 isNewCoordinates: false,
 cityIndex: undefined,
 stores : {},
 currentDetail:[]
})

const reducer = (state=defaultState, action) =>{
 switch (action.type) {
  case ActionTypes.GET_MAP_ALL_COORDINATES:
   return state.set('stores', fromJS(action.data))
  case ActionTypes.GET_SPOT_CITY_INDEX:
   return state.set('cityIndex', action.data)
  case ActionTypes.FIX_LNG_CHANGE:
   return state.set('lng', action.data)
  case ActionTypes.FIX_LAT_CHANGE:
   return state.set('lat', action.data)
  case ActionTypes.FIX_ZOOM_CHANGE:
   return state.set('zoom', action.data)
  case ActionTypes.FIX_CITY_INDEX:
   return state.set('cityIndex', action.data)
  case ActionTypes.IS_NEW_COORDINATES:
   return state.set('isNewCoordinates', true)
  case ActionTypes.NOT_NEW_COORDINATES:
   return state.set('isNewCoordinates', false)
  case ActionTypes.FIX_CURRENT_DETAIL:
   return state.set('currentDetail', fromJS(action.data))
  default:
   return state
 }
}

export default reducer
