import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { MapContent } from '../style';
import * as ActionCreators from '../store/ActionCreators';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import markerPng from '../../../assets/mapbox/nowMarker.png'
 
mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoidmluY2VudDE5OTYxMTEyIiwiYSI6ImNrbWJuOWJpZzFvMWgyb2xhcnhjdjdieG8ifQ.dQitPZUergSwkepHFAJPhA';

function SideNavbar(props) {

 const { lng, lat, zoom, isNewCoordinates, stores, handleGetAllCity } = props;
 
 let mapContainer = useRef() 

 const Stores = stores.toJS();

 useEffect(() => {
  handleGetAllCity()
 }, [handleGetAllCity])

 useEffect(() =>{
  const map = new mapboxgl.Map({
   container: mapContainer.current,
   style:'mapbox://styles/mapbox/outdoors-v11',
   center:[lng, lat],
   zoom: zoom
  })

  map.on('load', () => {

  map.loadImage(markerPng,function (error, image) {
  
    if (error) throw error;

      map.addImage('cityMarker', image);

      map.addSource(
        'points', {
        'type': 'geojson',
        'data': Stores
      });
      
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
        'icon-image': 'cityMarker',
        'icon-size': 0.2
        }
      });
    }
    );
  
  if(!isNewCoordinates){
    flyToStore(map, lng, lat)
  }

  });

  map.on('click', 'points', function (e) {
    CreatorPopup(map, e)
  });
  
  map.on('mouseenter', 'points', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
  
  map.on('mouseleave', 'points', function () {
  map.getCanvas().style.cursor = '';
  });

  return () => map.remove();

 },[Stores, lng, lat, zoom, isNewCoordinates]);

  function flyToStore(map, lng, lat) {
    map.flyTo({
      center: [lng, lat],
      zoom: 15
    });
  }

  function CreatorPopup(map, e){
    
  let coordinates = e.features[0].geometry.coordinates;
  let name = e.features[0].properties.name;
  let address = e.features[0].properties.address;

  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
  
  const popup = new mapboxgl.Popup()
  popup.setLngLat(coordinates).setHTML(`
    <div class="mapCard">
    <div class="mapCardTitle">${name}</div>
    <div class="mapCardAddress">${address}</div>
    <button class="mapCardBtn">閱讀詳情</button>
    </div>
  `).addTo(map);
  }

 return (
    <>
     <MapContent ref={mapContainer}>
       {/* <MapNav>Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</MapNav> */}
     </MapContent>
   </>
 )
}

const mapState = (state) =>{
 return {
  lng: state.getIn(['SpotMap','lng']),
  lat: state.getIn(['SpotMap','lat']),
  zoom: state.getIn(['SpotMap','zoom']),
  stores: state.getIn(['SpotMap','stores']),
  isNewCoordinates: state.getIn(['SpotMap','isNewCoordinates'])
 }
}

const mapDispatch = (dispatch) =>{
 return {
  handleLng(lng){
   dispatch(ActionCreators.fixLngChange(lng))
  },
  handleLat(lat){
   dispatch(ActionCreators.fixLatChange(lat))
  },
  handleZoom(zoom){
   dispatch(ActionCreators.fixZoomChange(zoom))
  },
  handleGetAllCity(){
   dispatch(ActionCreators.GetAllCity())
  }
 }
}

export default connect(mapState, mapDispatch)(SideNavbar)