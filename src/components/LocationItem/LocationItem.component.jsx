import React from 'react';
import HeaderLoca from '../HeaderLoca/HeaderLoca.component'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import RestaItem from '../RestaItem/RestaItem.component';

function Map({restaInfo}) {
    console.log(restaInfo)
//const clave-api= AIzaSyDjgfO4nLql6GMkG1t49hLrVmMjHNOzCU0,{name,lat,lng,address}
return (

  <>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: restaInfo.location.lat, lng: restaInfo.location.lng }}

    >
    <Marker 
        key={restaInfo.name}
        position={{
            lat: restaInfo.location.lat,
            lng: restaInfo.location.lng
        }}
    />
    <InfoWindow 
        position={{
            lat: restaInfo.location.lat,
            lng: restaInfo.location.lng
        }}
    >
        <div>
            <h2>{restaInfo.name}</h2>
            {
                restaInfo.formattedAddress.map(item =>(
                    <p>{item}</p>
                ))
            }
        </div>

    </InfoWindow>
    </GoogleMap>
    </>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function LocationItem() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
          libraries=geometry,drawing,places=${
              process.env.AIzaSyDjgfO4nLql6GMkG1t49hLrVmMjHNOzCU0
          }`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
    </div>

    
  )

}
// //&key=${process.env.AIzaSyDjgfO4nLql6GMkG1t49hLrVmMjHNOzCU0}
 export default LocationItem;
