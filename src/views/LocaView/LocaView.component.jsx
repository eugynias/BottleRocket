import React from 'react';

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import LocationItem from '../../components/LocationItem/LocationItem.component';



function LocaView({ restaItem }) {

return (
    <>
        <LocationItem  name ={restaItem.name} lng={restaItem.location.lng} lat={restaItem.location.lat} address={restaItem.location.lat}/>
    </>
);
}

export default LocaView;

