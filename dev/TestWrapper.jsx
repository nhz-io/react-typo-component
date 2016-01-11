import React from 'react';
import Typo from '../src/main.jsx';

export default class TestWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() { this.forceUpdate() }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }

  componentWillUnmount() { window.removeEventListener('resize', this.handleResize) }

  render() { return <Typo className='typo'>Foobar</Typo>; }
}
