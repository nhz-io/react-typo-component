import React from 'react';
const ctx = document.createElement('canvas').getContext('2d');
const fontProps = [ 'font-style', 'font-weight', 'height', 'font-family' ];

export default class ReactTypoComponent extends React.Component {

  calculate() {
    const { container } = this.refs;
    const { children } =  this.props;
    const text = children && children.toString();
    if(text && container) {
      let style = getComputedStyle(container);
      const width = parseFloat(style.getPropertyValue('width'));
      const height = parseFloat(style.getPropertyValue('height'));
      ctx.font = fontProps.map(p => style.getPropertyValue(p)).join(' ');
      const ratio = width / ctx.measureText(text).width;
      return ratio <= 1 ? height * ratio : height;
    }
    return 0;
  }

  render() {
    const { props } = this;
    const fontSize = this.calculate();
    const style = { fontSize, lineHeight: fontSize + 'px' };
    return <div ref='container' {...props} style={style}>{props.children}</div>;
  }

  componentDidMount() { this.forceUpdate(); }
}
