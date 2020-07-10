import React from 'react';
import { Link } from  'react-router-dom';

import image from '../../assets/lunch.png';
import image2 from '../../assets/tab_internets@2x.png';

import * as Style from './Footer.styles';



function Footer() {
  return (
      <Style.FooterContainer>
            <Style.ContainerLog>
            <Link to='/restaView'>
                <Style.Logo src={image} 
                />
            </Link>
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
