import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

main();

function main() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<App />, div);
}
