import React from 'react';
import Typo from '../src/main.jsx';

export default class TestWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 'Type your stuff here' };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() { this.forceUpdate() }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }

  componentWillUnmount() { window.removeEventListener('resize', this.handleResize) }

  render() {
    return(
      <div style={{width:'100%', height: '100%'}}>
        <Typo className='typo'><span style={{display:'inline-block', verticalAlign:'middle'}}>Multiline<br/>Autosizing<br/>Example</span></Typo>
        <Typo className='typo' norender={true} raw={true} content={this.state.value}>
          <textarea wrap='soft' style={{width:'100%', height:'100%'}} onChange={({target:{value}}) => this.setState({value})} defaultValue={this.state.value}/>
        </Typo>
        <Typo className='typo' content={`<span class="wrap">${this.state.value.replace(/\n/gmi, '<br>')}</span>`}/>
      </div>
    );
  }
}
