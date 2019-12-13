import React from 'react';
import { Container } from 'semantic-ui-react'
import Navbar from './navbar/Navbar'
import Home from './home/Home'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Home/>
      </Container>
    </div>
  );
}

export default App;
