import React from 'react';

import * as Style from './Header.styles';
import image from '../../assets/ic_webRefresh@2x.png';
import image2 from '../../assets/ic_webForward@2x.png';
import image3 from '../../assets/ic_webBack@2x.png';

function Header() {
  return (
    <Style.Header>
       <img src={image} />
       <img src={image2} />
       <img src={image3}/>
    </Style.Header>
  );
}

export default Header;
