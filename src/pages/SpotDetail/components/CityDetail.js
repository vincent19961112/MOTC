import React from 'react';
import { connect } from 'react-redux';
import { DetailCard, DetailContent, DetailTime, DetailTitle, DetailSubscription, DetailSrcUpdateTime, DetailUpdateTime, DetailPhone, DetailAddress, DetailZipCode, DetailTravelInfo, DetailOpenTime, DetailPicture, DetailWrapper, DetailTicketInfo, DetailRemarks } from '../style';
import { ActionCreators } from '../store';
import { useParams } from 'react-router-dom';

const handleDateFormat = (Date) =>{
  let startIndex = Date.indexOf('T')
  let Year = Date.slice(0,startIndex)
  let lastIndex = Date.lastIndexOf('+08:00')
  let Time = Date.slice(startIndex + 1,lastIndex)
  console.log(Year,Time)
  return `${Year} ${Time}`
}

function CityDetail(props){
  const { CityDetail, handleCityDetail } = props;
  const url = useParams();
  const Detail = CityDetail.toJS();
  if(Detail.length === 0){
    handleCityDetail(url.detailId)
   return null
   }else{
    const prevID = Detail[0].ID;
    if(url.detailId !== prevID){
      handleCityDetail(url.detailId)
    }
    return (
    <DetailCard>
      <DetailContent>
       <DetailTitle>{Detail[0].Name}</DetailTitle>
       <DetailTime>
         <DetailSrcUpdateTime>觀光局檔案更新時間:{handleDateFormat(Detail[0].SrcUpdateTime)}</DetailSrcUpdateTime>
         <DetailUpdateTime>本平台資料更新時間:{handleDateFormat(Detail[0].UpdateTime)}</DetailUpdateTime>
       </DetailTime>
        
       <DetailSubscription>{Detail[0].DescriptionDetail ? Detail[0].DescriptionDetail : '沒有資訊'}</DetailSubscription>
       <DetailPhone>服務電話:{Detail[0].Phone ? Detail[0].Phone : '沒有資訊'}</DetailPhone>
       <DetailAddress>景點地址:{Detail[0].Address ? Detail[0].Address : '沒有資訊'}</DetailAddress>
       <DetailZipCode>郵遞區號:{Detail[0].ZipCode ? Detail[0].ZipCode : '沒有資訊'}</DetailZipCode>
       <DetailTravelInfo>交通資訊:{Detail[0].TravelInfo ? Detail[0].TravelInfo : '沒有資訊'}</DetailTravelInfo>
       <DetailOpenTime>開放時間:{Detail[0].OpenTime ? Detail[0].OpenTime : '沒有資訊'}</DetailOpenTime>
       <DetailPicture img={Detail[0].Picture.PictureUrl1 ? Detail[0].Picture.PictureUrl1 : '沒有圖片'}></DetailPicture>
          <DetailWrapper>
              <DetailTicketInfo>票價資訊:{Detail[0].TicketInfo ? Detail[0].TicketInfo : '沒有資訊'}</DetailTicketInfo>
              <DetailRemarks>警告及注意事項:{Detail[0].Remarks ? Detail[0].Remarks : '沒有資訊'}</DetailRemarks>
          </DetailWrapper> 
      </DetailContent>
     </DetailCard>
    )
   }
}


const mapState = (state) =>{
 return {
  CityDetail: state.getIn(['spotDetail', 'CityDetail']),
 }
}

const mapDispatch = (dispatch) =>{
 return {
   handleCityDetail(id){
    dispatch(ActionCreators.getCityDetail(id))
   }
 }
}

export default connect(mapState, mapDispatch)(CityDetail)