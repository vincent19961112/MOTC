import React, { Component } from 'react';
import SpotList from './components/SpotList';
import { SpotTitle } from './style';

class ScenicSpot extends Component {
 
 render(){
  return (
   <>
    <SpotTitle>風景</SpotTitle> 
    <SpotList />
   </>
  )
 }
 
}

export default ScenicSpot