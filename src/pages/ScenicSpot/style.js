import styled from 'styled-components';

export const Loading = styled.div`
 padding: 20px;
 text-align: center;
 font-size: 40px;
 line-height:40px;
 height:250px;
`

export const SpotListCard = styled.div`
 z-index: 1;
 overflow: hidden;
 cursor: pointer;
 min-height: 200px;
 position: relative;
 margin: 50px 30px;
 padding: 15px 30px;
 box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
 .SpotListImg{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width:150px;
  height:150px;
 }
  &:after {
   z-index: -1;
   position: absolute;
   bottom: 10px;
   left: 10px;
   content: '${(props)=>props.index}';
   font-size: 80px;
   color: #888;
   opaticy: 0.2;
   transform: skewX(-36deg);
  }
`

export const SpotTitle = styled.div`
 z-index: 2;
 font-size: 25px;
 font-weight: 800;
 text-align: center;
 line-height: 75px;
 height: 75px;
 width: 100%;
 background: whitesmoke;
 color: #888; 
`

export const CardTitle = styled.div`
 z-index: 2;
 font-size: 25px;
 padding:10px 30px;
`

export const CardSubTitle = styled.div`
 font-size: 15px;
 padding:10px 35px;
`

export const SpotContent = styled.div`
 z-index: 2;
 max-width:50%;
 margin-top: 10px;
 padding:0px 30px;
`