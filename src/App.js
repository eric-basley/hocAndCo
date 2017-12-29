import React from 'react'
import PropTypes from 'prop-types'

class WithMouse extends React.Component {
  state = { x: 0, y: 0 }
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }
  render() {
    const { children } = this.props
    return <div onMouseMove={this.handleMouseMove}>{children(this.state)}</div>
  }
}

WithMouse.propTypes = {
  children: PropTypes.func.isRequired,
}

const App = () => (
  <WithMouse>
    {({ x, y }) => (
      <div style={{ height: '100vh' }}>
        <h1>
          Mouse position is: ({x}, {y})
        </h1>
      </div>
    )}
  </WithMouse>
)

export default App
