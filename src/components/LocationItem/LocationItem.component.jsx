import React from 'react';
import { GoogleMap ,withScriptjs, withGoolgeMap } from "react-google-maps";
import HeaderLoca from '../HeaderLoca/HeaderLoca.component'

import {
    GoogleMap,
    withScriptjs,
    withGoolgeMap,
    Marker,
} from "react-google-maps";


function Map({data}) {
//const clave-api= AIzaSyDjgfO4nLql6GMkG1t49hLrVmMjHNOzCU0
return (

  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat :  , lng :}}
  />
    <Marker
      key={data.contact.phone}
      position={{
        lat: data.restaurants.location.lat,
        lng: data.restaurants.location.lng
      }}
    />
)
}

const WRAPPEDmAP = withScriptjs(withGoolgeMap(Map))

function LocationItem() {

  return (
    <div>
      googleMapURL={}
    </div>

    
  )

}
export default LocationItem;
