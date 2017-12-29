import React from 'react';
import PropTypes from 'prop-types';
import { spring } from 'popmotion';
import cat from './cat.svg';

class WithMouse extends React.Component {
  state = { x: 0, y: 0 };
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };
  render() {
    const { children } = this.props;
    return <div onMouseMove={this.handleMouseMove}>{children(this.state)}</div>;
  }
}

WithMouse.propTypes = {
  children: PropTypes.func.isRequired,
};

class Cat extends React.Component {
  render() {
    const { mouse } = this.props;
    const style = {
      top: mouse.y,
      left: mouse.x,
      position: 'fixed',
      width: '50px',
      height: '50px',
    };
    return <img style={style} alt="cat" src={cat} />;
  }
}

Cat.propTypes = {
  mouse: PropTypes.object.isRequired,
};

const App = () => (
  <WithMouse>
    {({ x, y }) => (
      <div style={{ height: '100vh' }}>
        <h1>
          Mouse position is: ({x}, {y})
        </h1>
        <Cat mouse={{ x, y }} />
      </div>
    )}
  </WithMouse>
);

spring({ from: { x: 200, y: 50 }, to: { x: 500, y: 100 } }).start(v => console.log(v));
export default App;
