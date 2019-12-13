import React, { useState } from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'

function HomeGrid(props) {
  const [buttonActive, setButtonActive] = useState(true)

  function handleLike() {
    if (buttonActive) setButtonActive(!buttonActive)
  }

  function setButtonColor() {
    return (
      buttonActive
        ? 'violet'
        : 'grey'
    )
  }

  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column floated={'left'} width={3}>
          <Image verticalAlign='top' align="left" src={`../../assets/icons/${props.fiveDay.icon}.png`} />
          <span style={{color:"#6435c9"}}>
            <strong>{props.fiveDay.name}</strong>
            <br></br>
            <strong>{props.fiveDay.current}</strong>
          </span>
        </Grid.Column>
        <Grid.Column textAlign='right' floated='right' width={2}>
          <Button
            color={setButtonColor()}
            content='Like'
            icon='heart'
            active={buttonActive}
            onClick={handleLike} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <h1>{props.fiveDay.headline}</h1>
      </Grid.Row>
      <Grid.Row textAlign='center' verticalAlign='bottom' columns={5}>
        {props.fiveDay.fiveDays.map((day, i) => {
          return (
            <Grid.Column key={i}>
              {day.day}
              <br></br>
              {day.temp}
            </Grid.Column>
          )
        })}
      </Grid.Row>
    </Grid>
  )
}

export default HomeGrid