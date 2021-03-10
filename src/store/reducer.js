import { combineReducers } from 'redux-immutable';
import { reducer as scenicSpotReducer } from '../pages/ScenicSpot/store';
import { reducer as SpotCityReducer } from '../pages/ScenicSpotCity/store';

const reducer = combineReducers({
 scenicSpot: scenicSpotReducer,
 spotCity: SpotCityReducer
})

export default reducer