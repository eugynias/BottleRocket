import React from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component'

import Welcome from '../../assets/Welcome.png';
import * as Style from './HomeView.style';

function HomeView() {
  return (

    <Style.ContainerHome>

      <Style.Header>
      <Header />
      </Style.Header>
      
      <Style.Img src={Welcome} />

      <Style.Footer>
      <Footer />
      </Style.Footer>

    </Style.ContainerHome>
  );
}

export default HomeView;
