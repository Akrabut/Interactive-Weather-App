import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function Navbar(props) {
  const [value, setValue] = useState('home');

  function handleChange(toRender) {
    // this can be shortened, but state change can be skipped if there's no need for it
    if (value !== 'home' && toRender === 'home') setValue('home')
    else if (value !== 'favorites' && toRender === 'favorites') setValue('favorites')
  }

  return (
    <Menu color={'violet'}>
      <Menu.Item header>
        <p style={{ color: '#6435c9' }}>Or's weather app</p>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item
          as={Link}
          to='/favorites'
          name='Home'
          content='Home'
          active={value === 'home'}
          onClick={() => handleChange('home')}
        />
        <Menu.Item
          as={Link}
          to='/favorites'
          name='Favorites'
          content='Favorites'
          active={value === 'favorites'}
          onClick={() => handleChange('favorites')}
        />
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar