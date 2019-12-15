import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { setCachedFiveDay } from '../location_search/locationSearchActions'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Favorites(props) {
  if (!props.favorites.values().next().value) return (
    <Container text={true} textAlign={'center'}>
      <h3 style={{ color: '#6435c9' }}>Like cities to have them shown here!</h3>
    </Container>
  )

  // unfortunately, there's no Map.reduce or Map.map in javascript
  function getFavorites() {
    const arr = []
    for (let favorite of props.favorites.values()) arr.push(favorite)
    return arr
  }

  return (
    <Container>
      <Card.Group centered stackable={'true'}>
        {getFavorites().map(favorite => (
          <Card key={favorite.name} as={Link} to={`/home/${favorite.name}`} onClick={() => props.setNavbarTab('home')} color='violet' raised={'true'}>
            <Card.Content textAlign='center'>
              <Card.Header style={{ fontSize: '1.5vw', color: '#6435c9' }}>
                {favorite.name}<br></br>{favorite.current}
              </Card.Header>
              <br></br>
              <Card.Description style={{ fontSize: '1.4vw' }}>
                {favorite.headline}
              </Card.Description>
              <br></br>
              <Image size='tiny' src={`../../assets/icons/${favorite.icon}.png`} />
            </Card.Content>
          </Card>
        )
        )}
      </Card.Group>
    </Container>
  )
}

const mapDispatchToProps = {
  setCachedFiveDay,
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  }
}

const connectedFavorites = connect(mapStateToProps, mapDispatchToProps)(Favorites)
export default connectedFavorites