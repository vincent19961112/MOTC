import React, { useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ActionCreators } from '../store';
import { SpotListCard, CardTitle, SpotContent, CardSubTitle, Loading } from '../style';

function SpotCityList(props){
   const { SpotCityList, handleLoading, handleHasMoreList } = props;
   const list = SpotCityList.toJS();
   
   const urlParams = useParams(); 
   
   const citylist = list.map(data=>{
    let [result] = Object.values(data).slice(0,1)
    return result
   })

   const cityIndex = citylist.indexOf(`${urlParams.cityname}`)

   const city = list[cityIndex].CityNameEN;

   const prevState = list[cityIndex].Citylist;
   
   const listIndex = list[cityIndex].Citylist.length

   const hasMore = list[cityIndex].hasMore;

   const loading = list[cityIndex].loading;

   const observer = useRef() 

   const lastElementRef = useCallback((node) => {
      if(observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
          handleLoading(cityIndex)
          handleHasMoreList(city, cityIndex, prevState, hasMore, listIndex, loading) 
        }
      })
      if(node) observer.current.observe(node)
   })

   if(list.length === 0 && !loading){
    return <Loading>Loading...</Loading>
   }else{
    return (
      list.map((items)=>{
        if(items.CityName === urlParams.cityname){
          return items.Citylist.map((item, index)=>{
            const { ID, Name, Address, Description } = item;
            const Picture = item.Picture
            if(items.Citylist.length === index + 1){
              return (
                <SpotListCard index={index + 1} key={ID} ref={lastElementRef}> 
                  <CardTitle>{Name}</CardTitle>
                  <CardSubTitle>{Address}</CardSubTitle>
                  <SpotContent>{Description ? Description : '沒有簡介'}</SpotContent>
                  <img className='SpotListImg' alt={Picture.PictureDescription1} src={Picture.PictureUrl1 ? Picture.PictureUrl1 : '沒有圖片'}/>
                </SpotListCard>
              )
            } else{
              return (
                <SpotListCard index={index + 1} key={ID}>
                  <CardTitle>{Name}</CardTitle>
                  <CardSubTitle>{Address}</CardSubTitle>
                  <SpotContent>{Description ? Description : '沒有簡介'}</SpotContent>
                  <img className='SpotListImg' alt={Picture.PictureDescription1} src={Picture.PictureUrl1 ? Picture.PictureUrl1 : '沒有圖片'}/>
                </SpotListCard>
              )
            } 
        })
      }else{
        return null
      }
      })
    )
   }
}

const mapState = (state) => {
 return {
  SpotCityList: state.getIn(['spotCity','City'])
 }
}

const mapdispatch = (dispatch) => {
  return {
    handleLoading(index){
      dispatch(ActionCreators.loading(index))
    },
    handleHasMoreList(city, cityIndex, prevState, hasMore, index, loading){
      dispatch(ActionCreators.getMoreSpotCityList(city, cityIndex, prevState, hasMore, index, loading))
    }
  }
}

export default connect(mapState, mapdispatch)(SpotCityList)  