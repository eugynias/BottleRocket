import React from 'react';
import {  BrowserRouter as Router,
          Route,
          } from  'react-router-dom';

import HomeView from './views/HomeView/HomeView.component.jsx';
import RestaView from './components/RestaView/RestaView.component';
import LocaView from './components/LocaView/LocaView.component';
import Footer from './components/Footer/Footer.component'


function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" exact component={HomeView} />
        <Route exact path="/restaView" exact component={RestaView} />
        <Route exact path="/locaView" exact component={LocaView} />
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
