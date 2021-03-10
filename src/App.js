import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import store from './store/index';
import Header from './common/header';
import home from './pages/home/index';
import scenicSpot from './pages/ScenicSpot';
import scenicSpotCity from './pages/ScenicSpotCity';

class App extends Component {
  render(){
    return (
     <>
     <GlobalStyle />
     <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={home}></Route>
        <Route path='/scenicSpot' exact component={scenicSpot}></Route>
        <Route path='/scenicSpot/:cityname' exact component={scenicSpotCity}></Route>
      </BrowserRouter>
     </Provider>
     </>
    );
  }
}

export default App;
