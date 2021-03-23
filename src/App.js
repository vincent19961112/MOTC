import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import store from './store/index';
import Header from './common/header';
import home from './pages/home/index';
import ScenicSpot from './pages/ScenicSpot';
import ScenicSpotCity from './pages/ScenicSpotCity';
import SpotDetail from './pages/SpotDetail';
import ScenicSpotMap from './pages/ScenicSpotMap';

class App extends Component {
  render(){
    return (
     <>
     <GlobalStyle />
     <Provider store={store}>
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Header />
        <Route path='/' exact component={home}></Route>
        <Route path='/scenicSpot' exact component={ScenicSpot}></Route>
        <Route path='/scenicSpot/ScenicSpotMap' exact component={ScenicSpotMap}></Route>
        <Route path='/scenicSpot/city/:cityname' exact component={ScenicSpotCity}></Route>
        <Route path='/scenicSpot/scenicSpotDetail/:detailId' exact component={SpotDetail}></Route>
        <Route path='/scenicSpot/:cityname/scenicSpotDetail/:detailId' exact component={SpotDetail}></Route>
      </BrowserRouter>
     </Provider>
     </>
    );
  }
}

export default App;
