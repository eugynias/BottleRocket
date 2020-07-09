import React from 'react';
import * as Style from './HeaderLunch.styles';

import image from '../../assets/icon_map@2x.png';


function HeaderLuch() {
  return (
    <Style.HeaderLunch>
      <h1>Lunch Time</h1>
      <Style.Img src={image} />
    </Style.HeaderLunch>
  );
}

export default HeaderLuch;
