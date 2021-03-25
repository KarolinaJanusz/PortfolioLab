import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import start from './components/start';
import oCoChodzi from './components/pages/oCoChodzi';
import oNas from './components/pages/oNas';
import fundacjaiOrganizacje from './components/fundacjaiOrganizacje';
import kontakt from './components/pages/kontakt';
import NavBar from './components/NavBar';
import mainphoto from './images/mainphoto.png';

function App(){
  return(
     <Router>
        <NavBar />

        <Switch>
          <Route path = '/' exact component = {start} />
          <Route path = '/o-co-chodzi' exact component = {oCoChodzi} />
          <Route path = '/o-nas' exact component = {oNas} />
          <Route path = '/fundacja-i-organizacje' exact component = {fundacjaiOrganizacje} />
          <Route path = '/kontakt' exact component = {kontakt} />
        </Switch>
     </Router>
  )
}

export default App;