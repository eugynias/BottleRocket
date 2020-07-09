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
            <Style.ContainerLog>
                <Style.Logo src={image} 
                  onClick={imageOnClickHandler}
                />
                <p>lunch</p>
            </Style.ContainerLog>
            <Style.ContainerLog>
                <Style.Logo2 src={image2}
                />
                <p>internets</p>
            </Style.ContainerLog>
            
        </Style.FooterContainer>
  );
}

export default Footer;
