import React from 'react'
import { object } from 'prop-types'

const withMouse = Component => {
  class EnhanceComponent extends React.Component {
    state = { x: 0, y: 0 }
    handleMouseMove = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      })
    }
    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <Component mouse={this.state} />
        </div>
      )
    }
  }
  return EnhanceComponent
}

const App = ({ mouse }) => {
  const { x, y } = mouse
  return (
    <div style={{ height: '100vh' }}>
      <div>
        <h1>
          Mouse position is: ({x}, {y})
        </h1>
      </div>
    </div>
  )
}

App.propTypes = {
  mouse: object.isRequired,
}

export default withMouse(App)
