import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { handleChange } from './navBarHelper'



function Navbar(props) {
  const [value, setValue] = useState('home');

  return (
    <Menu color={'violet'}>
      <Menu.Item header>
        <p style={{ color:'#6435c9'}}>Or's weather app</p>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item
          name='Home'
          content='Home'
          active={value === 'home'}
          onClick={() => handleChange(value, setValue)}
          />
        <Menu.Item
          name='Favorites'
          content='Favorites'
          active={value === 'favorites'}
          onClick={() => handleChange(value, setValue)}
        />
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar