import React, { useState } from 'react';
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Favorites from './favorites/Favorites'
import ERROR from './_Error/_Error'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

function App() {
  const [navbarTab, setNavbarTab] = useState('home');

  return (
    <Router className="App">
      <Navbar value={navbarTab} setValue={setNavbarTab}/>
      <ERROR/>
      <Switch>
        <Route exact path='/'><Redirect to='/home' /></Route>
        <Route exact path='/home/:id'
          render={({ match }) => <Home match={match.params.id} />}>
        </Route>
        <Route path='/home'><Home /></Route>
        <Route path='/favorites'><Favorites navbarTab={navbarTab} setNavbarTab={setNavbarTab} /></Route>
      </Switch>
    </Router>
  );
}

export default App;
