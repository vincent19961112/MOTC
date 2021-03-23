import * as ActionTypes from './ActionTypes';
import { List } from 'immutable';
import axios from 'axios';

const CityDetail = (data) =>({
 type:ActionTypes.GET_DETAIL,
 data: List(data)
})

export const getCityDetail = (ID) =>{
  return (dispatch) =>{
      axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot`,{ params: {$filter: `id eq '${ID}'`, $format:'JSON'}})
      .then((res)=>{
      const action = CityDetail(res.data)
      dispatch(action);
      }).catch(()=>{
        console.log('error');
      })
  }
}