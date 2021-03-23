import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
 padding: 20px;
 text-align: center;
 font-size: 40px;
 line-height:40px;
 height:250px;
`

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color:#777
`

export const SpotListCard = styled.div`
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
 font-size: 25px;
 padding:10px 30px;
`

export const CardSubTitle = styled.div`
 font-size: 15px;
 padding:10px 35px;
`

export const SpotContent = styled.div`
 max-width:500px;
 margin-top: 10px;
 padding:0px 30px;
`

export const Navbar = styled.div`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 line-height: 50px;
 min-height: 50px;
 background: whitesmoke;
`

export const NavItem = styled(Link)`
 text-decoration: none;
 cursor: pointer;
 border: 1px solid white;
 margin:5px;
 padding:10px;
 color: #888;
 font-weight: 800;
 font-size: 10px;
 &:hover {
  background:white;
  color: #666;
 }
 &:focus{
  background:white;
  color: #666;
 }
  `