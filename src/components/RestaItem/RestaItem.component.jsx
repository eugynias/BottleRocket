import React from 'react';

import { useHistory } from "react-router-dom";



function RestaItem({restaItem}) {

  const history = useHistory();


  const imageOnClickHandler = () => {
		history.push('/locaView' )
  };
  

  return (
    <>

      <img src={restaItem.backgroundImageURL} 
          onClick={imageOnClickHandler}/>
    </>
  );
}

export default RestaItem;
