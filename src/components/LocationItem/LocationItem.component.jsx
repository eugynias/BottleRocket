import React from 'react';

import HeaderLoca from '../HeaderLoca/HeaderLoca.component'

import {
    GoogleMap,
    withScriptjs,
    withGoolgeMap,
    Marker,
} from "react-google-maps";

function LocationItem(data) {

  <GoogleMap
  defaultZoom={10}
  defaultCenter={{ lat :  , lng :}}
/>
  <Marker
    key={data.contact.phone}
    position={{
      lat: data.location.lat,
      lng: data.location.lng
    }}
  />;

 const WRAPPEDmAP = withScriptjs(withGoolgeMap(Map))
  return (
   
   
  )
}

export default LocationItem;
