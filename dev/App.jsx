import React from 'react';
import Typo from '../src/main.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 'Try typing here and resize the window' };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() { this.forceUpdate() }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }

  componentWillUnmount() { window.removeEventListener('resize', this.handleResize) }

  render() {
    return(
      <div style={{width:'100%', height: '100%'}}>
        <Typo className='typo' measure={this.state.value.replace(/\n/gmi, '<br/>')}>
            <textarea wrap='hard' style={{width:'100%', height:'100%'}} onChange={({target:{value}}) => this.setState({value})} defaultValue={this.state.value}/>
        </Typo>
      </div>
    );
  }
}
