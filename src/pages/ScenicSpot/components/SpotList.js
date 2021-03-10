import React, { useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../store';
import { SpotListCard, CardTitle, SpotContent, CardSubTitle, Loading } from '../style';

function SpotList(props) {

  const { scenicSpotList, hasMore, loading, handleloading, handlehasMoreList } = props;
  const list = scenicSpotList.toJS();

  const observer = useRef()

  const lastElementRef = useCallback((node) => {
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        handleloading()
        handlehasMoreList(list, hasMore, list.length, loading);
      }
    })
    if(node) observer.current.observe(node)
  }) 

   if(list.length === 0 && !loading){
    return <Loading>Loading...</Loading>
   }else{
    return (
      list.map((item, index)=>{
        const { ID, Name, Address, Description } = item
        const Picture = item.Picture
        if(list.length === index + 1){
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
    )
  }  
}
const mapState = (state) => {
 return {
  scenicSpotList: state.getIn(['scenicSpot','scenicSpotList']),
  loading: state.getIn(['scenicSpot','loading']),
  hasMore: state.getIn(['scenicSpot','hasMore'])
 }
}

const mapDispatch = (dispatch) => {
 return { 
   handleloading(){
     dispatch(ActionCreators.loading())
   },
   handlehasMoreList(prevState, hasMore, index, loading){
     dispatch(ActionCreators.getMoreSpotList(prevState, hasMore, index, loading))
   }
 }
}

export default connect(mapState, mapDispatch)(SpotList)