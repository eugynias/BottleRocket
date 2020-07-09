import React from 'react';
import {  BrowserRouter as Router,
          Route,
          } from  'react-router-dom';

import HomeView from './views/HomeView/HomeView.component';
import RestaView from './views/RestaView/RestaView.component';
import LocaView from './views/LocaView/LocaView.component';
import Footer from './components/Footer/Footer.component'


function App() {
  return (
    <div >
      <Router>
        <Route exact path="/"  component={HomeView} />
        <Route  exact path="/restaView" component={RestaView} />
        <Route  exact path="/locaView/:restaItem"  >
        <LocaView />
        </Route >
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
