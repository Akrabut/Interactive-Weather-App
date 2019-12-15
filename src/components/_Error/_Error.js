import React from 'react'
import { connect } from 'react-redux'
import { setError } from './errorActions'
import { Modal, Image, Header, Button } from 'semantic-ui-react'


function _Error(props) {
  if (!props.error.status) return null

  return (
    <Modal centered={true} open={props.error.status} size={'mini'}>
      <Modal.Content>
        <Image fluid src={`../../assets/icons/uh_oh.png`}/>
        <Modal.Description>
          <Header textAlign='center'>{`${props.error.name}: ${props.error.message}`}</Header>
        </Modal.Description>
        <Button color={'red'} size={'tiny'} floated={'right'} onClick={() => props.setError(false)}>Close</Button>
      </Modal.Content>
    </Modal>
  )
}

const mapDispatchToProps = {
  setError,
}

function mapStateToProps(state) {
  return {
    error: state.error,
  }
}

const connectedError = connect(mapStateToProps, mapDispatchToProps)(_Error)
export default connectedError