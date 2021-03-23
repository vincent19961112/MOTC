import styled from 'styled-components';

export const  DetailCard = styled.div`
 padding: 50px;
`

export const DetailContent = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const  DetailTitle = styled.div`
 margin: 50px;
 font-weight: bold;
 text-align: center;
 font-size: 30px;
 background: white;
`

export const DetailTime = styled.div`
 display: flex;
 color:#666;
 font-size: 15px;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;  
 padding: 5px;
 background: #888;
`

export const DetailSrcUpdateTime = styled.div`
padding:20px;
background: whitesmoke;
`

export const DetailUpdateTime = styled.div`
padding:20px;
background: whitesmoke;
`

export const DetailSubscription = styled.div`
 margin-top: 50px;
 padding:50px 20px;
 font-size:25px;
 background: whitesmoke;
`

export const DetailPhone = styled.div`
 background: whitesmoke;
 align-self: flex-start;
`

export const DetailAddress = styled.div`
 background: whitesmoke;
 align-self: flex-start;
`

export const DetailZipCode = styled.div`
 background: whitesmoke;
 align-self: flex-start;
`

export const DetailTravelInfo = styled.div`
 background: whitesmoke;
 align-self: flex-start;
`

export const DetailOpenTime = styled.div`
 background: whitesmoke;
 align-self: flex-start;
`

export const DetailPicture = styled.div`
 background: url(${(props)=>props.img});
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 height:500px;
 width:100%;
`

export const DetailWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 width:100%;
`

export const DetailTicketInfo = styled.div`
 background-color: #aaaa;
 padding: 10px;
 color: whitesmoke;
 font-weight: bold;
`

export const DetailRemarks = styled.div`
 background-color: coral;
 padding: 10px;
 color: red;
 font-weight: bold;
`
