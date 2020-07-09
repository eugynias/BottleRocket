import React from 'react';
import * as Style from './HeaderLunch.styles';

import image from '../../assets/icon_map@2x.png';


function HeaderLuch() {
  return (
    <Style.HeaderLunch>
      <h1>Lunch Time</h1>
      <img src={image} />
    </Style.HeaderLunch>
  );
}

export default HeaderLuch;
