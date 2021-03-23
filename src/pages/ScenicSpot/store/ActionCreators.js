import * as ActionTypes from './ActionTypes';
import { List } from 'immutable';
import axios from 'axios';

export const loading = () =>({
  type: ActionTypes.LOADING
})

export const loaded = () =>({
  type: ActionTypes.LOADED
})

export const hasNoMore = () =>({
  type: ActionTypes.HAS_NO_MORE
})

const changeList = (data) =>({
  type: ActionTypes.CHANGE_ALL_LIST,
  data: List(data)
})

export const getSpotList = (prevState) =>{
  return (dispatch) =>{
    if(prevState.length === 0){
      axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',{ params: {$top: 30, $format:'JSON'}})
      .then((res)=>{
      dispatch(changeList(res.data));
      }).catch(()=>{
        console.log('error');
      })
    }
  }
}

export const getMoreSpotList = (prevState, hasMore, index, loading) =>{
  return (dispatch) =>{
    if(hasMore && loading){
       axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',{ params: {$top: 30, $skip: index, $format:'JSON'}})
      .then((res)=>{
      const moreData = [...prevState,...res.data]
      if(res.data.length === 0 && hasMore){
        dispatch(hasNoMore())
      }else{
        dispatch(changeList(moreData));
      }
      dispatch(loaded());
      }).catch(()=>{
        console.log('error');
      })
    }
  }
}

