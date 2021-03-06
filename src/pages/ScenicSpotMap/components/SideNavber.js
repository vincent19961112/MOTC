import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as SpotListCreators } from '../../ScenicSpot/store';
import { ActionCreators as CityListCreators } from '../../ScenicSpotCity/store';
import { ActionCreators as MapboxCreators } from '../store';
import { SideNavbarWrapper, NavbarCityNav, NavbarCityNavItem, NavItemWrapper, NavItemTitle, NavItemAddress, NavItemPhone } from '../style';

function SideNavbar(props) {

  const { CityAll, City, cityIndex, lng, lat, handleSpotList, handleSpotCityList, handleSpotIndex, handleLng, handleLat, handleZoom, handleNewCoordinates, handleCurrentData } = props;

  const listAll = CityAll.toJS();

  const list = City.toJS();
  
 return (
  <SideNavbarWrapper>
   <NavbarCityNav>
     {getNavCityNameList(listAll, list, handleSpotList, handleSpotCityList, handleSpotIndex)}
   </NavbarCityNav>
     {getNavCityList(listAll, list, cityIndex, lng, lat, handleLng, handleLat, handleZoom, handleNewCoordinates, handleCurrentData)}
   </SideNavbarWrapper>
 )
}

const getNavCityNameList = (listAll, list, handleSpotList, handleSpotCityList, handleSpotIndex) =>{
  return(
    <>
     <NavbarCityNavItem onClick={()=>{
       handleSpotList(listAll)
       handleSpotIndex('all')
       }}>全部
     </NavbarCityNavItem>
      { 
        list.map((item, index) =>{
        return (
          <NavbarCityNavItem key={item.CityName}
            onClick={()=>{
              handleSpotCityList(item.CityNameEN, index, item.Citylist)
              handleSpotIndex(index)
              }}>
            {item.CityName}
          </NavbarCityNavItem>
           )
        })
      }
    </>
    )
}

const getNavCityList = (listAll, list, cityIndex, lng, lat, handleLng, handleLat, handleZoom, handleNewCoordinates, handleCurrentData) =>{
  if(listAll && cityIndex === 'all'){
  return listAll.map((item) =>{
      return (
        <NavItemWrapper
              key={item.ID}
              onClick={() =>{
              handleLat(Number(item.Position.PositionLat));
              handleLng(Number(item.Position.PositionLon));
              handleZoom(12)
              handleNewCoordinates(lng, lat, item.Position.PositionLon, item.Position.PositionLat)
              handleCurrentData(item)
          }}>
          <NavItemTitle>{item.Name}</NavItemTitle>
          <NavItemAddress>{item.Address}</NavItemAddress>
          <NavItemPhone>{item.Phone}</NavItemPhone>
        </NavItemWrapper>
       )
     })
  }
  if(cityIndex !== undefined && list[cityIndex].Citylist){
     return list[cityIndex].Citylist.map((item) =>{
      return (
        <NavItemWrapper
              key={item.ID}
              onClick={() =>{
              handleLat(Number(item.Position.PositionLat));
              handleLng(Number(item.Position.PositionLon));
              handleZoom(12)
              handleNewCoordinates(lng, lat, item.Position.PositionLon, item.Position.PositionLat)
              handleCurrentData(item)
          }}>
          <NavItemTitle>{item.Name}</NavItemTitle>
          <NavItemAddress>{item.Address}</NavItemAddress>
          <NavItemPhone>{item.Phone}</NavItemPhone>
        </NavItemWrapper>
       )
     })
  }else{
   return (<div>請選一個縣市</div>)
  }
}

const mapState = (state) =>{
  return {
    CityAll: state.getIn(['scenicSpot','scenicSpotList']),
    City: state.getIn(['spotCity','City']),
    cityIndex: state.getIn(['SpotMap','cityIndex']),
    lng: state.getIn(['SpotMap','lng']),
    lat: state.getIn(['SpotMap','lat'])
  }
}

const mapdispatch = (dispatch) =>{
  return {
  handleSpotList(list){
   dispatch(SpotListCreators.getSpotList(list))
  },
  handleSpotCityList(cityEN, index, list){
   dispatch(CityListCreators.getSpotCityList(cityEN, index, list))
  },
  handleSpotIndex(index){
   dispatch(MapboxCreators.getSpotCityIndex(index))
  },
  handleLng(lng){
   dispatch(MapboxCreators.fixLngChange(lng))
  },
  handleLat(lat){
   dispatch(MapboxCreators.fixLatChange(lat))
  },
  handleZoom(zoom){
   dispatch(MapboxCreators.fixZoomChange(zoom))
  },
  handleNewCoordinates(prevlng, prevlat, lng, lat){
   dispatch(MapboxCreators.fixNewCoordinates(prevlng, prevlat, lng, lat))
  },
  handleCurrentData(Citydetail){
   dispatch(MapboxCreators.fixCurrentDetail(Citydetail))
  }
}
}

export default connect(mapState, mapdispatch)(SideNavbar)