import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./App.js";

console.log("Hello index.js");

window.onload = function (){

  ReactDOM.render(React.createElement('div', {}, [
    React.createElement('h2', {}, "Hello index.js"),
    React.createElement(App, {}, "Hi")
  ]), document.getElementById("root"))

}
