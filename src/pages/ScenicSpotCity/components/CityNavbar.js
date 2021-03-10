import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../store';
import { Navbar, NavItem } from '../style';


function CityNavbar (props){
  const { City, getSpotCityList } = props;
  const list = City.toJS();

  return (
    <Navbar>
      {list.map((item,index)=>{
        const { CityName, CityNameEN, Citylist } = item
      return (
        <NavItem
         to={`/scenicSpot/${CityName}`}
         key={CityNameEN}
         onClick={()=>{getSpotCityList(CityNameEN, index, Citylist)}}
         >       
          {(item.CityName)}
        </NavItem>
      )
      })}
    </Navbar>
  )
}

const mapState = (state) => {
 return {
  City : state.getIn(['spotCity','City'])
 }
}

const mapDispatch = (dispatch) => {
 return {
  getSpotCityList(city, index, list){
   dispatch(ActionCreators.getSpotCityList(city, index, list))
  } 
 }
}

export default connect(mapState, mapDispatch)(CityNavbar)