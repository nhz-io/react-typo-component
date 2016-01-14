import React from 'react';

const
  $ = document.createElement('div'),
  f  = () => parseFloat($.style.fontSize) || 0,
  dw = () =>  ($.clientWidth || 0) * (1 + Math.log(f() || 0)/100),
  dh = () =>  ($.clientHeight || 0) * (1 + Math.log(f() || 0)/100),
  cw = (_) => _.clientWidth,
  ch = (_) => _.clientHeight,
  reset = {
    display       : 'inline-block',
    position      : 'fixed',
    top           : '-9999px',
    left          : '-9999px',
    zIndex        : '-9999',
    width         : 'auto',
    height        : 'auto',
    lineHeight    : '1.25em',
    transform     : 'none',
    padding       : 0,
    paddingTop    : 0,
    paddingBottom : 0,
    paddingLeft   : 0,
    paddingRight  : 0,
    border        : 'none',
    whiteSpace    : 'normal'
  };

for(let key in reset) { $.style[key] = reset[key] }

export default class ReactTypoComponent extends React.Component {
  constructor(props) {
    super(props);
    if(!$.parentElement) { document.body.appendChild($) }
  }

  calculateFontSize(_) {
    if(_) {
      $.style.fontSize = '16px';
      const { content, measure, children } = this.props;

      $.innerHTML = content || measure ? content || measure : _.innerHTML;

      let limit = 1;
      do { $.style.fontSize = f() * cw(_) / dw() + 'px' }
      while(limit++ < 10 && (dw() / cw(_)) > 1);

      limit = 1;
      while(limit++ < 10 && (dh() / ch(_)) > 1) {
        $.style.fontSize = f() * ch(_) / dh() + 'px';
      }
      //$.innerHTML = '';
    }
    return f() + 'px';
  }

  componentDidMount() { this.forceUpdate() }

  render() {
    const
      { props, refs }      = this,
      { container }        = refs,
      { content, measure, children } = props,
      style = Object.assign({}, props.style),
      _ = container;

    window.wtf = this;

    if(_) {
      style.fontSize = this.calculateFontSize(_);
      this._previousFontSize = style.fontSize;

      if(content) {
        return <div
            {...props}
            style={style}
            ref='container'
            dangerouslySetInnerHTML={this.renderRawContent(content)}
          />
      }

      else { return <div {...props} style={style} ref='container'>{children}</div> }
    }

    else if(content) {
      return <div
          {...props}
          style={style}
          ref='container'
          dangerouslySetInnerHTML={this.renderRawContent(content)}
        />
    }

    else { return <div {...props} style={style} ref='container'>{children}</div> }
  }

  renderRawContent(content) { return { __html: content || '' } }
}
