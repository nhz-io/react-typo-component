import React from 'react';
const ctx = document.createElement('canvas').getContext('2d');
const div = document.createElement('div');
const measureTextWidth = function (text, font = '16px Arial') {
  ctx.font = font;
  return ctx.measureText(text).width;
}
const max = function(arr) { return Math.max.apply(Math, arr) };
const MAXITERATIONS = 100;
const CONTAINERPROPS = [
  'font-style', 'font-weight', 'width',
  'line-height', 'height', 'font-family', 'font-size'
];
const FONTPROPS = [
  'font-style', 'font-weight', 'height', 'font-family'
]

export default class ReactTypoComponent extends React.Component {
  getContainerComputedStyle(container = this.refs.container, properties = CONTAINERPROPS) {
    if(container) {
      const style = getComputedStyle(container);
      let result = {};
      properties.forEach(p => result[p] = style.getPropertyValue(p));
      return result;
    }
  }

  calculateFontSize(text, style) {
    if(!style) { style = this.getContainerComputedStyle() }
    if(text && style) {
      let width = parseFloat(style.width) || 0;
      let ratio = parseFloat(style['font-size'])/(parseFloat(style['line-height']) || 1);
      let height = (parseFloat(style.height) || 0) * ratio;
      if(width && height && ratio) {
        style.height = height + 'px';
        let font = FONTPROPS.reduce((a,b,i) => (i<2?style[a]:a) + ' ' + style[b]);
        let textWidth = measureTextWidth(text, font);
        let count = 0;
        while (textWidth > width) {
          count++;
          if(count > MAXITERATIONS) { break }
          height = height * width / (textWidth*1.01);
          style.height = height + 'px';
          font = FONTPROPS.reduce((a,b,i) => (i<2?style[a]:a) + ' ' + style[b]);
          textWidth = measureTextWidth(text, font);
        }
        return parseFloat(height) || null;
      }
    }
    return null;
  }

  calculate(content) {
    if(content) {
      let lines = content.split(/\n/);
      let style = this.getContainerComputedStyle();
      style.height = parseFloat(style.height)/lines.length + 'px';
      let measurements = lines.map(l => measureTextWidth(l));
      let text = lines[measurements.indexOf(max(measurements))];
      return this.calculateFontSize(text, style);
    }
    return null;
  }

  render() {
    const { props, refs } = this;
    let { content, norender, raw, wrap } = props;
    const _content = content;
    const { container } = refs;
    let style = null, fontSize = null;
    if(container) {
      if(!content) {
        content = container.innerHTML;
        raw = false;
      }
      if(content && raw) {
        fontSize = this.calculate(content);
      }
      else if(content) {
        div.innerHTML = content;
        if(content && !div.innerText) {
          div.innerHTML = content.replace(/\<br[^\>]*?(\/\>|\>(.*?\(<\/br\>)?)/gmi, '\n<br></br>')
        }
        fontSize = this.calculate(div.innerText || div.textContent);
      }
      style = { fontSize };
    }
    if(norender && _content) {
      return <p ref='container' {...props} style={style}>{props.children}</p>;
    }
    else if(_content) {
      return(
        <p
          ref='container'
          {...props}
          style={style}
          dangerouslySetInnerHTML={this.renderRawContent(_content)}
        />
      )
    }
    return <p ref='container' {...props} style={style}>{props.children}</p>;
  }

  componentDidMount() { this.forceUpdate(); }

  renderRawContent(content) { return { __html: content || '' } }
}
