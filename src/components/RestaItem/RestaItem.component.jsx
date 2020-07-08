import React from 'react';

import { useHistory } from "react-router-dom";



function RestaItem(data) {

  const history = useHistory();


  const imageOnClickHandler = () => {
		history.push('/locaView' )
  };
  

  return (
    <>
      <img src={data.backgroundImageURL} 
          onClick={imageOnClickHandler}/>
    </>
  );
}

export default RestaItem;
