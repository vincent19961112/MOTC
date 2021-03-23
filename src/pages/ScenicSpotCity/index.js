import React, { Component } from 'react';
import SpotCityList from './components/SpotCityList';
import CityNavbar from './components/CityNavbar';

class ScenicSpotCity extends Component {
 
 render(){
  return (
   <>
    <CityNavbar />
    <SpotCityList />
   </>
  )
 }
}



export default ScenicSpotCity