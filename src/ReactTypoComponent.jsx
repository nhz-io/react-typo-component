import React from 'react';
const ctx = document.createElement('canvas').getContext('2d');
const measureTextWidth = function (text, font) {
  ctx.font = font;
  return ctx.measureText(text).width;
}

const CONTAINERPROPS = [
  'font-style', 'font-weight', 'width', 'line-height', 'height', 'font-family'
];
const FONTPROPS = [
  'font-style', 'font-weight', 'height', 'font-family'
]

export default class ReactTypoComponent extends React.Component {
  getContainerComputedStyle(properties = CONTAINERPROPS) {
    const { container } = this.refs;
    const style = getComputedStyle(container);
    let result = {};
    properties.forEach(p => result[p] = style.getPropertyValue(p));
    return result;
  }

  calculateContainerFontSize(children = this.props.children) {
    console.log('------------------------------');
    const { container } = this.refs;
    const text = children && children.toString();
    if(text && container) {
      let style = this.getContainerComputedStyle()
      let width = parseInt(style.width) - 1;
      console.log(`% Container width: ${width}`);
      let height = parseInt(style.height);
      console.log('% Container Height', style.height);
      let font = FONTPROPS.reduce((a,b,i) => (i<2?style[a]:a) + ' ' + style[b]);
      console.log("% Font:", font);
      let textWidth = measureTextWidth(text, font);
      console.log("% Text width:", textWidth);
      let counter = 0;

      while(textWidth > width) {
        counter++;
        if(counter > 10) { break };
        console.log(`******************\nIteration: ${counter}`);
        let ratio = width / textWidth;
        console.log('% Ratio', ratio);
        style.height = parseInt(style.height) * ratio + 'px';
        console.log('% Height', style.height);
        font = FONTPROPS.reduce((a,b,i) => (i<2?style[a]:a) + ' ' + style[b]);
        console.log("% Font:", font);
        textWidth = measureTextWidth(text, font);
        console.log("% Container width:", width);
        console.log("% Text width:", textWidth);
        console.log("% Font size:", style.height);
      }
      console.log("% Font size:", style.height);

      return parseInt(style.height);
    }
    return 0;
  }

  render() {
    console.log("CHILDREN", this.props.children);
    const { props } = this;
    const fontSize = this.calculateContainerFontSize();
    console.log("FONT SIZE", fontSize);
    const style = { fontSize, lineHeight: fontSize + 'px' };
    return <div ref='container' {...props} style={style}>{props.children}</div>;
  }

  componentDidMount() { this.forceUpdate(); }
}
