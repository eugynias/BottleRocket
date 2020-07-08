import React from 'react';
import { useHistory } from  'react-router-dom';

import image from '../../assets/lunch.png';



function Footer() {

  const history = useHistory();

  const imageOnClickHandler = () => {
		history.push('/restaList' )
  };


  return (
  
            <div>
                <img src={image} 
          onClick={imageOnClickHandler}/>
          <h1>Footer</h1>
            </div>
  );
}

export default Footer;
