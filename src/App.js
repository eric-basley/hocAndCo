import React from 'react'

class App extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render() {
    const { x, y } = this.state

    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <h1>
          Mouse position is: ({x}, {y})
        </h1>
      </div>
    )
  }
}

export default App
