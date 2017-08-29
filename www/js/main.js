import React from 'react';
import ReactDOM from 'react-dom';
import ReactBanner from '../react/components/ReactBanner.jsx';
import http from './services/http';

require("../sass/main.scss");
const html = require("../html/main.html");

export class View {
  constructor() {} // eslint-disable-line

  deconstructor() {}

  html() {
    return html;
  }

  addListeners() {}

  init() {
    ReactDOM.render(<ReactBanner />, document.getElementById('react-example'));

  }


  //--Custom Method---------
  customMethod() {
    console.log('..custom method');
  }

}
export { View as default };