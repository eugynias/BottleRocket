import React from 'react';

import { useHistory ,Link } from "react-router-dom";



function RestaItem({restaItem}) {
  
 // const history = useHistory();


  // const imageOnClickHandler = () => {
	// 	history.push(/locaView:${restaItem})
  // };
  

  return (
    <>
      <Link to={`/locaView/${restaItem.name}/${restaItem.location.lng}/${restaItem.location.formattedAddress}`}>
        <img src={restaItem.backgroundImageURL}/>
      </Link>
    </>
  );
}

export default RestaItem;
