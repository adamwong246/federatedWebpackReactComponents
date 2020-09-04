import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./App.jsx";

console.log("Hello index.js");

ReactDOM.render(React.createElement('div', {}, [
  React.createElement('h2', {}, "Hello index.js"),
  React.createElement(App, {}, "Hi")
]), document.getElementById("root"))
