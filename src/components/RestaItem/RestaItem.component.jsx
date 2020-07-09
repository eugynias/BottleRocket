import React from 'react';
import * as Style from './RestaItem.styles';

import { useHistory ,Link } from "react-router-dom";



function RestaItem({restaItem}) {
  
  return (
    <>
      <Link to={`/locaView/${restaItem.name}/${restaItem.location.lng}/${restaItem.location.lat}/${restaItem.location.formattedAddress}`}>
        <Style.Image src={restaItem.backgroundImageURL} />
      </Link>
    </>
  );
}

export default RestaItem;
