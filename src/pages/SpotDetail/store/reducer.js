import { fromJS } from 'immutable';
import * as ActionTypes from './ActionTypes';

const defaultState = fromJS({
  CityDetail:[]
})

const reducer = (state = defaultState, action) =>{
 switch (action.type) {
  case ActionTypes.GET_DETAIL:
    return state.set('CityDetail', action.data)
  default:
   return state
 }
}

export default reducer