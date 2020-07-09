import React from 'react';
import { useHistory } from  'react-router-dom';

import image from '../../assets/lunch.png';
import image from '../../assets/tab_internets@3x.png';

import * as Style from './Footer.styles';



function Footer() {

  const history = useHistory();

  const imageOnClickHandler = () => {
		history.push('/restaList' )
  };


  return (
        <Style.FooterContainer>
            
            <img src={image} 
                    onClick={imageOnClickHandler}/>
          
        </Style.FooterContainer>
  );
}

export default Footer;
