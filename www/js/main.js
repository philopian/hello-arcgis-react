import React from 'react';
import ReactDOM from 'react-dom';
import Arcgis from '../react/components/Arcgis.jsx';
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
    ReactDOM.render(<Arcgis />, document.getElementById('react'));

  }


  //--Custom Method---------
  customMethod() {
    console.log('..custom method');
  }

}
export { View as default };