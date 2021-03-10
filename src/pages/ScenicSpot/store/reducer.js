import { fromJS } from 'immutable';
import * as ActionTypes from './ActionTypes';
const defaultState = fromJS({
   scenicSpotList: [],
   loading: false,
   hasMore: true
})

const reducer = (state=defaultState,action) =>{
 switch(action.type) {
  case ActionTypes.LOADING:
   return state.set('loading', true)
  case ActionTypes.LOADED:
   return state.set('loading', false)
  case ActionTypes.HAS_NO_MORE:
   return state.set('hasMore', false)
  case ActionTypes.CHANGE_ALL_LIST:
   return state.set('scenicSpotList',action.data)
  default:
  return state
 }
}

export default reducer
