import React from 'react';

import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";



function LocaView() {
const { restaItem } = useParams();

console.log('Identificar', restaItem)

return (
    <>
        <p> {restaItem}</p>
    </>
);
}

export default LocaView;
