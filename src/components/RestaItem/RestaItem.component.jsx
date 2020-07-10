import React from 'react';
import * as Style from './RestaItem.styles';

import { useHistory } from "react-router-dom";




function RestaItem({restaItem}) {
 const history= useHistory()

const handleClick =()=>{
  history.push('/locaView/'+ restaItem.name)
}
  
  return (
    <>
     
        <Style.Image src={restaItem.backgroundImageURL}
         onClick={handleClick} />
     
    </>
  );
}

export default RestaItem;
