import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addFavorite, removeFavorite } from './likeButtonActions'
import { setError } from '../_Error/errorActions'

function LikeButton(props) {
  const [buttonActive, setButtonActive] = useState(true)

  useEffect(() => {
    // like button should be disabled if city is already liked
    setButtonActive(!props.favorites.has(props.fiveDay.name))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.fiveDay.name])

  function like(callback) {
    try {
      callback(props.fiveDay)
      setButtonActive(!buttonActive)
    } catch(err) { props.setError(true, err.name, err.message) }
  }

  function handleLike() {
    buttonActive
      ? like(props.addFavorite)
      : like(props.removeFavorite)
  }

  function setButtonColor() {
    return (
      buttonActive
        ? 'violet'
        : 'grey'
    )
  }

  return (
    <Button
      size={'large'}
      color={setButtonColor()}
      content='Like'
      icon='heart'
      active={buttonActive}
      onClick={handleLike} />
  )
}

const mapDispatchToProps = {
  addFavorite, removeFavorite, setError,
}

function mapStateToProps(state) {
  return {
    fiveDay: state.fiveDay,
    favorites: state.favorites,
  }
}

const connectedLikeButton = connect(mapStateToProps, mapDispatchToProps)(LikeButton)
export default connectedLikeButton