import React from 'react';

import * as Style from './Header.styles';
import image from '../../assets/ic_webRefresh@2x.png';
import image2 from '../../assets/ic_webForward@2x.png';
import image3 from '../../assets/ic_webBack@2x.png';

function Header() {
  return (
    <Style.Header>
        <Style.Img src={image3}/>
        <Style.Img src={image} />
        <Style.Img src={image2} />  
    </Style.Header>
  );
}

export default Header;
