import React from 'react';
import { useHistory, Redirect ,Link} from  'react-router-dom';

import image from '../../assets/lunch.png';
import image2 from '../../assets/tab_internets@2x.png';

import * as Style from './Footer.styles';



function Footer() {

  const history= useHistory();

  const imageOnClickHandler = () => {
		history.push("/locaView");
  };


  return (
        <Style.FooterContainer>

          <Style.Img1>
            <img src={image} 
                    onClick={imageOnClickHandler}/>
          </Style.Img1>
          
          <Style.Img2>
            <img src={image2} />
            </Style.Img2>
        </Style.FooterContainer>
  );
}

export default Footer;
