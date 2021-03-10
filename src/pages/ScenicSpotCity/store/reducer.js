import { fromJS } from 'immutable';
import * as ActionTypes from './ActionTypes';
const defaultState = fromJS({
   City:[
      { CityName:'臺北市', CityNameEN:'Taipei', Citylist:[], hasMore: true, loading: false },
      { CityName:'新北市', CityNameEN:'NewTaipei', Citylist:[], hasMore: true, loading: false },
      { CityName:'桃園市', CityNameEN:'Taoyuan', Citylist:[], hasMore: true, loading: false },
      { CityName:'台中市', CityNameEN:'Taichung', Citylist:[], hasMore: true, loading: false },
      { CityName:'臺南市', CityNameEN:'Tainan', Citylist:[], hasMore: true, loading: false },
      { CityName:'高雄市', CityNameEN:'Kaohsiung', Citylist:[], hasMore: true, loading: false },
      { CityName:'基隆市', CityNameEN:'Keelung', Citylist:[], hasMore: true, loading: false },
      { CityName:'新竹市', CityNameEN:'Hsinchu', Citylist:[], hasMore: true, loading: false },
      { CityName:'新竹縣', CityNameEN:'HsinchuCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'苗栗縣', CityNameEN:'MiaoliCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'彰化縣', CityNameEN:'ChanghuaCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'南投縣', CityNameEN:'NantouCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'雲林縣', CityNameEN:'YunlinCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'嘉義縣', CityNameEN:'ChiayiCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'嘉義市', CityNameEN:'Chiayi', Citylist:[], hasMore: true, loading: false },
      { CityName:'屏東縣', CityNameEN:'PingtungCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'宜蘭縣', CityNameEN:'YilanCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'花蓮縣', CityNameEN:'HualienCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'臺東縣', CityNameEN:'TaitungCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'金門縣', CityNameEN:'KinmenCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'澎湖縣', CityNameEN:'PenghuCounty', Citylist:[], hasMore: true, loading: false },
      { CityName:'連江縣', CityNameEN:'LienchiangCounty', Citylist:[], hasMore: true, loading: false },
   ]
})

const reducer = (state=defaultState, action) =>{
 switch(action.type) {
  case ActionTypes.LOADING:
   return state.setIn(['City', action.index,'loading'], true)
  case ActionTypes.LOADED:
   return state.setIn(['City', action.index,'loading'], false)
  case ActionTypes.HAS_NO_MORE:
   return state.setIn(['City', action.index,'hasMore'], false)
  case ActionTypes.CHANGE_CITY_LIST:
   return state.setIn(['City', action.index,'Citylist'], action.data) 
  default:
  return state
 }
}

export default reducer
 