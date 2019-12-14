import React from 'react';
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Favorites from './favorites/Favorites'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

function App() {

  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'><Redirect to='/home' /></Route>
        <Route path='/home'><Home /></Route>
        <Route path='/favorites'><Favorites /></Route>
      </Switch>
    </Router>
  );
}

export default App;
