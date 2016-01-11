import React from 'react';
import Typo from '../src/main.jsx';

export default class TestWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 'foobar' };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() { this.forceUpdate() }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }

  componentWillUnmount() { window.removeEventListener('resize', this.handleResize) }

  render() {
    return(
      <div style={{width:'100%', height: '100%'}}>
      <Typo className='typo'>{this.state.value}</Typo><br/>
      <textarea onChange={({target:{value}}) => { this.setState({value}) }} style={{width:'30%', height:'20%'}} value={this.state.value} />
      </div>
    );
  }
}
