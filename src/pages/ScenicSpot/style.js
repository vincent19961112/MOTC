import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
 padding: 1.25em;
 text-align: center;
 font-size: 2.5em;
 line-height:2.5em;
 height:15.625em;
 @media (-webkit-min-device-pixel-ratio: 2) { 
 padding: 0.625em;
 line-height:2.5em;
 height:15.625em;
 }
 
 @media (-webkit-min-device-pixel-ratio: 3) {
 padding: 0.41666666em;
 font-size: 0.83333333em;
 line-height: 0.83333333em;
 height: 5.2083333em;
  }
`
export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color:#777
`

export const SpotListCard = styled.div`
 z-index: 1;
 overflow: hidden;
 cursor: pointer;
 min-height: 12.5em;
 position: relative;
 margin: 3.125em 1.875em;
 padding: 0.9375em 1.875em;
 box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);
 .SpotListImg{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.25em;
  width: 9.375em;
  height: 9.375em;
 }
  &:after {
   z-index: -1;
   position: absolute;
   bottom: 0.625em;
   left: 0.625em;
   content: '${(props)=>props.index}';
   font-size: 5em;
   color: #888;
   opaticy: 0.2;
   transform: skewX(-36deg);
  }
 @media (-webkit-min-device-pixel-ratio: 2) { 
  min-height: 6.25em;
  margin: 1.5625em 0.9375em;
  padding: 0.46875em 0.9375em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.2);
  &:after {
    bottom: 0.05em;
    left: 0.2125em;
   font-size: 2.5em;
   transform: skewX(-36deg);
  }
  .SpotListImg{
    right: 0.625em;
    width: 5.6875em;
    height: 5.6875em;
  }
 }
 
 @media (-webkit-min-device-pixel-ratio: 3) {
  min-height: 4.1666666em;
  margin: 1.04166666em 0.625em;
  padding: 0.3125em 0.625em;
  box-shadow: 0 0 0.1666666em rgba(0, 0, 0, 0.2);
  &:after {
    bottom: 0.05em;
    left: 0.2125em;
   font-size: 1.666666em;
   transform: skewX(-36deg);
  }
  .SpotListImg{
    right: 0.625em;
    width: 5.6875em;
    height: 5.6875em;
  }
 }
`

export const SpotTitle = styled.div`
 z-index: 2;
 font-size: 1.5625em;
 font-weight: 800;
 text-align: center;
 line-height: 4.6875em;
 height: 4.6875em;
 width: 100%;
 background: whitesmoke;
 color: #888; 
 @media (-webkit-min-device-pixel-ratio: 2) { 
 font-size: 0.78125em;
 line-height: 2.34375em;
 height: 2.34375em;
 }
 
 @media (-webkit-min-device-pixel-ratio: 3) {
 font-size: 0.52083333em;
 line-height: 1.5625em;
 height: 1.5625em;
 }
`

export const CardTitle = styled.div`
 z-index: 2;
 font-size: 1.5625em;
 padding:0.625em 1.875em;
 @media (-webkit-min-device-pixel-ratio: 2) { 
 font-size: 0.78125em;
 padding:0.625em 0.9375em;
 }
 
 @media (-webkit-min-device-pixel-ratio: 3) {
 font-size: 0.52083333em;
 padding:0.625em 0.625em;
 }
`

export const CardSubTitle = styled.div`
 font-size: 0.9375em;
 padding:0.625em 2.1875em;
 @media (-webkit-min-device-pixel-ratio: 2) { 
 font-size: 0.46875em;
 padding:0.3125em 1.09375em;
 }
 
 @media (-webkit-min-device-pixel-ratio: 3) {
 font-size: 0.3125em;
 padding:0.20833333em 0.72916666em;
 }
`

export const SpotContent = styled.div`
 z-index: 2;
 max-width:50%;
 margin-top: 0.625em;
 padding:0px 1.875em;
 @media (-webkit-min-device-pixel-ratio: 2) { 
 margin-top: 0.3125em;
 padding:0px 0.9375em;
 }
 
 @media (-webkit-min-device-pixel-ratio: 3) {
 margin-top: 0.20833333em;
 padding:0px 0.625em;
 }
`