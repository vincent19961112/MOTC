import { combineReducers } from 'redux-immutable';
import { reducer as scenicSpotReducer } from '../pages/ScenicSpot/store';
import { reducer as SpotCityReducer } from '../pages/ScenicSpotCity/store';
import { reducer as SpotDetailReducer } from '../pages/SpotDetail/store';
import { reducer as SpotMapReducer } from '../pages/ScenicSpotMap/store';

const reducer = combineReducers({
 scenicSpot: scenicSpotReducer,
 spotCity: SpotCityReducer,
 spotDetail: SpotDetailReducer,
 SpotMap: SpotMapReducer
})

export default reducer