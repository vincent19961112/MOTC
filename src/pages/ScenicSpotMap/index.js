import React, { Component } from 'react'
import SideNavbar from './components/SideNavber';
import Mapbox from './components/Mapbox';
import { ScenicMapWrapper } from './style';

class ScenicSpotMap extends Component {

 render(){
  return (
   <>
   <ScenicMapWrapper>
    <SideNavbar />
    <Mapbox />
   </ScenicMapWrapper>
   </>
  )
 }

}

export default ScenicSpotMap