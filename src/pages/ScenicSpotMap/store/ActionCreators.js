import * as ActionTypes from './ActionTypes';
import axios from 'axios';

const isNewCoordinates = (data) =>({
  type: ActionTypes.IS_NEW_COORDINATES,
  data
})

const notNewCoordinates = (data) =>({
  type: ActionTypes.NOT_NEW_COORDINATES,
  data
})

const GetMapAllCoordinates = (store) =>({
  type: ActionTypes.GET_MAP_ALL_COORDINATES,
  data: store
})


export const GetAllCity = () =>{
  return (dispatch) =>{
       axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',{ params: {$format:'JSON'}})
      .then((res)=>{

        const features = [];
        
        res.data.map(item=>{
          const { ID , Name, Address } = item;
          const { PositionLat, PositionLon } = item.Position;
          features.push(
            {
              "type": "Feature",
              "geometry": { 
                "type": "Point", 
                "coordinates":[PositionLon, PositionLat]
              }, 
              "properties":{
                "id": `${ID}`,
                "address": `${Address}`,
                "name": `${Name}`
              }
            })
            return features
        })
               
        const store = {
          type: "FeatureCollection",
          features: [...features]
        }

        dispatch(GetMapAllCoordinates(store))
      }).catch(()=>{
        console.log('error');
      })
  }
}

export const getSpotCityIndex = (data) =>({
 type: ActionTypes.GET_SPOT_CITY_INDEX,
 data
})

export const fixLngChange = (data) =>({
 type: ActionTypes.FIX_LNG_CHANGE,
 data
})

export const fixLatChange = (data) =>({
 type: ActionTypes.FIX_LAT_CHANGE,
 data
})

export const fixZoomChange = (data) =>({
 type: ActionTypes.FIX_ZOOM_CHANGE,
 data
})

export const fixNewCoordinates = (prevlng, prevlat, lng, lat) =>{
 return (dispatch) =>{
   if(prevlng !== lng || prevlat !== lat){
    dispatch(isNewCoordinates(false))
  }else{
    dispatch(notNewCoordinates(true))
  }
 }
}
