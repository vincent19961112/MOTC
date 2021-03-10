import React, { Component } from 'react';
import { HomeWrapper, HomeTitle, HomeContent, HomeFooter } from './style';

class home extends Component {
 
 render(){
  return (
    <HomeWrapper>
     <HomeTitle>MOTC 觀光景點</HomeTitle>
      <HomeContent>
        使用套件<br/>axios<br/>
        immutable<br/>
        react-immutable<br/>
        react-redux<br/>
        react-router-dom<br/>
        react-thunk<br/>
        redux<br/>
        redux-immutable<br/>
        styled-components
      </HomeContent>
     <HomeFooter>作者: 許鐸鐙</HomeFooter>
    </HomeWrapper>
  )
 }
 
}

export default home