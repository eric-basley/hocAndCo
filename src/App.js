import React from 'react';
import PropTypes from 'prop-types';
import { spring } from 'popmotion';
import cat from './cat.svg';

class Mouse extends React.Component {
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

Mouse.propTypes = {
  children: PropTypes.func.isRequired,
};

const hasMoved = (prevPosition, position) => prevPosition.x !== position.x || prevPosition.y !== position.y;

class Cat extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!this.state) return this.setState(nextProps.mouse);
    if (hasMoved(nextProps.mouse, this.props.mouse)) {
      if (this.spring) this.spring.stop();
      this.spring = spring({
        from: this.state,
        to: nextProps.mouse,
        stiffness: 200,
        damping: 10,
      }).start(v => this.setState(v));
    }
  }

  render() {
    if (!this.state) return null;
    const { x, y } = this.state;
    const style = {
      top: y,
      left: x,
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
  <Mouse>
    {({ x, y }) => (
      <div style={{ height: '100vh' }}>
        <h1>
          Mouse position is: ({x}, {y})
        </h1>
        <Cat mouse={{ x, y }} />
      </div>
    )}
  </Mouse>
);

export default App;
