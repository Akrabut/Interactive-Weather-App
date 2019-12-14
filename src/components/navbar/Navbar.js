import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { handleChange } from './navBarHelper'
import { Home } from '../home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";



function Navbar(props) {
  const [value, setValue] = useState('home');

  function handleChange() {
    value === 'home'
      ? setValue('favorites')
      : setValue('home')
  }

  return (
      <Menu color={'violet'}>
        <Menu.Item header>
          <p style={{ color: '#6435c9' }}>Or's weather app</p>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='Home'
            content='Home'
            active={value === 'home'}
            onClick={handleChange}
          />
          <Menu.Item
            name='Favorites'
            content='Favorites'
            active={value === 'favorites'}
            onClick={handleChange}
          />
        </Menu.Menu>
      </Menu>

  )
}

export default Navbar