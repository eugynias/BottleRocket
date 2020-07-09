import React from 'react';

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import LocationItem from '../../components/LocationItem/LocationItem.component';
import HeaderLoca from '../../components/HeaderLoca/HeaderLoca.component';

import * as Style from './LocaView.style'



function LocaView({ restaItem }) {

return (
    <>
    
        <HeaderLoca />
       
            <LocationItem  name ={restaItem.name} lng={restaItem.location.lng} lat={restaItem.location.lat} address={restaItem.location.lat}/>
    </>
);
}

export default LocaView;

