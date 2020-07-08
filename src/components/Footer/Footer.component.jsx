import React from 'react';
import { Link ,useHistory } from  'react-router-dom';

import img from '../../assets/images/tab_lunch@3x.png';



function Footer() {

  const history = useHistory();

  const imageOnClickHandler = () => {
		history.push('/restaList' )
  };


  return (
  
            <div>
                   <img src={img} 
          onClick={imageOnClickHandler}/>
            </div>
  );
}

export default Footer;
