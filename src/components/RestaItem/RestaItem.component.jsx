import React from 'react';

import { useHistory ,Link } from "react-router-dom";



function RestaItem({restaItem}) {
  
  return (
    <>
      <Link to={`/locaView/${restaItem.name}/${restaItem.location.lng}/${restaItem.location.lat}/${restaItem.location.formattedAddress}`}>
        <img src={restaItem.backgroundImageURL}/>
      </Link>
    </>
  );
}

export default RestaItem;
