import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from "./components/Header.js";

console.log("Hello index.js");

window.onload = function (){

  ReactDOM.render(React.createElement('div', {}, [
    React.createElement('h1', {}, "Hello index.js"),
    React.createElement(Header, {}, {})
  ]), document.getElementById("root"))

}
