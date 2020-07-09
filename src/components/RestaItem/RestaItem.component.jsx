import React from 'react';

import { useHistory } from "react-router-dom";



function RestaItem(restaData) {

  const history = useHistory();


  const imageOnClickHandler = () => {
		history.push('/locaView' )
  };
  

  return (
    <>

    <h1>hola</h1>
      <img src={restaData.backgroundImageURL} 
          onClick={imageOnClickHandler}/>
    </>
  );
}

export default RestaItem;
