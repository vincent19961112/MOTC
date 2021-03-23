import * as ActionTypes from './ActionTypes';
import { List } from 'immutable';
import axios from 'axios';

const changeList = (data, index) =>({
  type: ActionTypes.CHANGE_CITY_LIST,
  data: List(data),
  index
})

export const loading = (index) =>({
  type: ActionTypes.LOADING,
  index
})

export const loaded = (index) =>({
  type: ActionTypes.LOADED,
  index
})

export const hasNoMore = (index) =>({
  type: ActionTypes.HAS_NO_MORE,
  index
})

export const getSpotCityList = (city, cityIndex, prevState) =>{
  return (dispatch) =>{
    if(prevState.length === 0){
      axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}`,{ params: {$top: 30, $format:'JSON'}})
      .then((res)=>{
      const action = changeList(res.data, cityIndex)
      dispatch(action);
      }).catch(()=>{
        console.log('error');
      })
    }
  }
}

export const getMoreSpotCityList = (city, cityIndex, prevState, hasMore, index, loading) =>{ 
  return (dispatch) =>{
    if(hasMore && loading){
      axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}` ,{ params: {$top: 30, $skip: index, $format:'JSON'}})
      .then((res)=>{
      const moreData = [...prevState,...res.data]
      if(res.data.length === 0){
        dispatch(hasNoMore(cityIndex))
      }else{
        dispatch(changeList(moreData, cityIndex));
      }
      dispatch(loaded(cityIndex));
      }).catch(()=>{
        console.log('error');
      })
    }
  }
}
