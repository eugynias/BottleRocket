import React from 'react';
import HeaderLoca from '../HeaderLoca/HeaderLoca.component'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "google-maps";

function Map() {
//const clave-api= AIzaSyDjgfO4nLql6GMkG1t49hLrVmMjHNOzCU0,{name,lat,lng,address}
return (

  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat :30.886597, lng: -99.915906 }}

  />
);
}

const MapWrapped = withScriptjs(withGoogleMap (Map) );

function LocationItem() {

  return (
    <div>
      <MapWrapped 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
    </div>

    
  )

}
//&key=${process.env.AIzaSyDjgfO4nLql6GMkG1t49hLrVmMjHNOzCU0}
export default LocationItem;
