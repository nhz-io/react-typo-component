fs.toSource()
"(function () { return parseInt(t().style.fontSize) })"
c.toSource()
"(function c() {
"use strict";

  return document.getElementById('container');
})"
t.toSource()
"(function t(c, _t) {
"use strict";

  return document.getElementById('text');
})"
rh.toSource
function toSource()
rh.toSource()
"(function rh(c, t) {
"use strict";

  return c().clientHeight / t().clientHeight;
})"
rw.toSource()
"(function rw(c, t) {
"use strict";

  return c().clientWidth / t().clientWidth;
})"

import React from 'react';
const div = document.createElement('div');
const dw = () => div.clientWidth;
const dh = () => div.clientHeight;
const cw = () => container.clientWidth;
const ch = () => container.clientHeight;
const fs = () => parseFloat(div.style.fontSize)

export default class ReactTypoComponent extends React.Component {
  constructor(props) {

  }

  componentDidMount() {

  }

  render() {
    const {props, refs} = this;
    const {content, measure } = props
    const {container} = refs;
    let style = props.style || {};
    if(container) {
      div.style.fontSize = '16px';
      div.innerHTML = content;
      div.style.fontSize = '16px';
      div.style.fontSize = 16 *  dw()/cw() + 'px';
      style.fontSize = fs() * dh()/ch() + 'px';

      if(content) {
        return(
          <div
            ref='container'
            {...props}
            style={style}
            dangerouslySetInnerHTML={this.renderRawContent(content)}
          />
        );
      }
      else
        return <div {...props} style={style}>{props.children} />;
      }
    }
    else {
      if(content) {
        return(
          <div
            ref='container'
            {...props}
            dangerouslySetInnerHTML={this.renderRawContent(content)}
          />
        )
      }
      else { return <div ref='container' {...props}>{props.children}</div> }
    }
    if(content) {
      if(container) {
        div.innerHTML = content;
      }
      else {
        if(norender) {
          return <div ref='container' {...props}>{props.children}</div>
        }
        else {

        }
        return(
          <div
            ref='container' {...props}
            dangerouslySetInnerHTML={this.renderRawContent(content)}
          />
        )
      }
    }
    else {
      if(container) {
        div.innerHTML = container.innerHTML;
      }
      else {

      }
    }

    return(
      if(container) {

      } else {
        return <div ref='container' {...props}>{props.children}
      }
      <div ref='container' {..props} style={style} >
        {}
      </div>
    )
  }

  renderRawContent(content) { return { __html: content || '' } }
}
