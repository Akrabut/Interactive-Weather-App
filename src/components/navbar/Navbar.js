import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function Navbar(props) {
  function handleChange(toRender) {
    // this can be shortened, but state change can be skipped if there's no need for it
    if (props.value !== 'home' && toRender === 'home') props.setValue('home')
    else if (props.value !== 'favorites' && toRender === 'favorites') props.setValue('favorites')
  }

  return (
    <Menu color={'violet'} size={'huge'}>
      <Menu.Item header>
        <p style={{ color: '#6435c9' }}>Or's weather app</p>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item
          as={Link}
          to='/home'
          name='Home'
          content='Home'
          active={props.value === 'home'}
          onClick={() => handleChange('home')}
        />
        <Menu.Item
          as={Link}
          to='/favorites'
          name='Favorites'
          content='Favorites'
          active={props.value === 'favorites'}
          onClick={() => handleChange('favorites')}
        />
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar