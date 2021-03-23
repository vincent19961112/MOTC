import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../../pages/ScenicSpot/store';
import { HeaderWrapper, HeaderTitle, HeaderNavbar, NavLink } from './style';

function Header(props) {

  const { handleSpotList, scenicSpotList } = props;
  const list = scenicSpotList.toJS();

  return (
  <HeaderWrapper>
    <HeaderTitle>MOTC</HeaderTitle>
    <HeaderNavbar>
        <NavLink
        to={'/scenicSpot'}
        onClick={()=>handleSpotList(list)}
        >全部</NavLink>
        <NavLink 
        to={`/scenicSpot/city/${'臺北市'}`}
        >縣市</NavLink>
        <NavLink 
        to={`/scenicSpot/ScenicSpotMap`}
        >地圖</NavLink>
    </HeaderNavbar>
  </HeaderWrapper>
  )

}


const mapState = (state) => {
 return {
  scenicSpotList: state.getIn(['scenicSpot','scenicSpotList'])
 }
}


const mapDispatch = (dispatch) => {
  return {
    handleSpotList(list){
      dispatch(ActionCreators.getSpotList(list))
    }
  }
}

export default connect(mapState, mapDispatch)(Header)