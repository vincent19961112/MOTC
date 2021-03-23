import styled from 'styled-components';

export const ScenicMapWrapper = styled.div`
 position: relative;
 display: grid;
 grid-template-columns: 500px auto;
 grid-template-rows: 80vh;
  grid-template-areas:
    "side main"
`

export const SideNavbarWrapper = styled.div`
 grid-area: side;
 box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
 padding: 10px 10px;
 overflow-y: scroll;
::-webkit-scrollbar {
 width: 5px;
}

::-webkit-scrollbar-track {
 background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
 background: green;
}

::-webkit-scrollbar-thumb:hover {
 background: green;
}
`

export const NavbarCityNav = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 margin-top: 10px;
 box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
 padding: 5px 10px;
`
export const NavItemWrapper = styled.div`
 cursor: pointer;
 border-radius: 23px;
 display: flex;
 flex-direction: column;
 margin: 20px 10px;
 padding: 15px 30px;
 box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
` 

export const NavbarCityNavItem = styled.div`
 margin: 10px 2.5px 0px 2.5px;
 border-radius: 23px;
 width: 100px;
 cursor: pointer;
 text-align: center;
 font-size: 10px;
 padding: 10px;
 box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`



export const NavItemTitle = styled.div`
 font-size: 20px;
 font-weight: bold;
 text-align: center;
`

export const NavItemAddress = styled.div`
 margin:20px 2.5px;
 font-size: 10px;
 font-weight: 600;
`

export const NavItemPhone = styled.div`
 margin:20px 2.5px;
 font-size: 10px;
 font-weight: 400;
 text-align: end;
`

export const MapNav = styled.div`
 background-color: rgba(35, 55, 75, 0.9);
 grid-area: main;
 color: #ffffff;
 padding: 6px 12px;
 font: 15px/24px monospace;
 z-index: 1;
 position: absolute;
 top: 0;
 left: 0;
 margin: 12px;
 border-radius: 4px;
`


export const MapContent = styled.div`
 overflow: hidden;
 position: absolute;
 grid-area: main;
 top: 0;
 right: 0;
 left: 0;
 bottom: 0;
 .mapboxgl-control-container{
  display:none;
 }
 .mapCard{
     position: absolute;
     padding: 10px;
     top: -250px;
     left: -160px;
     background: red;
     height: 200px;
     width: 300px;
     .mapCardTitle{
      font-size: 20px;
      text-align: center;
      color: snow;
      margin: 20px;
     }
     .mapCardAddress{
      font-size:15px;
      text-align: center;
      color: snow;
      margin: 10px;
     }
     .mapCardBtn{
      display: flex;
      margin: 40px auto;
      padding: 10px;
      font-weight: bold;
      cursor: pointer;
      font-size: 20px;
      border: 1px solid black;
      color: black;
     }
 }
 .mapboxgl-popup {
  position: absolute;
  top: 0;
  left: 0;
 }
 .mapboxgl-popup-close-button {
  position: absolute;
  font-size: 20px;
  border: 3px solid black;
  border-radius: 35px;
  top: -260px;
  right: -170px;
 }
`




  