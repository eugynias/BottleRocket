import React from 'react';
import * as Style from './HeaderLoca.styles';
import image from '../../assets/ic_webBack@2x.png';
import image2 from '../../assets/icon_map@2x.png';

function HeaderLoca() {
  return (
    <>
    <Style.Header>
        <img src={image} />
        <h1>Lunch Tyme</h1>
        <img src={image2} />
    </Style.Header>
      
    </>
  );
}

export default HeaderLoca;
