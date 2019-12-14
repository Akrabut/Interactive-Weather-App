import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import LikeButton from '../like_button/LikeButton'

const style = {
  color: "#6435c9"
}

function HomeGrid(props) {
  return (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column floated={'left'} width={3}>
          <Image verticalAlign='top' align="left" src={`../../assets/icons/${props.fiveDay.icon}.png`} />
          <span style={style}>
            <strong>{props.fiveDay.name}<br></br>{props.fiveDay.current}</strong>
          </span>
        </Grid.Column>
        <Grid.Column textAlign='right' floated='right' width={2}>
          <LikeButton/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={1}>
        <h1 style={style}>{props.fiveDay.headline}</h1>
      </Grid.Row>
      <Grid.Row textAlign='center' verticalAlign='bottom' columns={5}>
        {props.fiveDay.fiveDays.map((day, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Image size='tiny' src={`../../assets/icons/${day.icon}.png`} />
                  <Card.Description>{day.day}<br></br>{day.temp}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid.Row>
    </Grid>
  )
}

export default HomeGrid