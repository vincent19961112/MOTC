import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
 text-align: center;
 height: 130px;
 width:100%;
 border-bottom:2px solid #eee;
`

export const HeaderTitle = styled.div`
  margin:20px 0;
`

export const HeaderNavbar = styled.div`
 display:flex;
 justify-content:center;
`


export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight:bold;
  cursor:pointer;
  margin: 0 10px;
  padding: 10px;
  font-size:20px;
  border:1px solid black;
  &:hover {
  background:black;
  color:white;
  border:1px solid white;
  }
  color:black;
  &:focus{
  background:black;
  color:white;
  border:1px solid white;
  }
`;