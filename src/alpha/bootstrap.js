import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./App.jsx";

ReactDOM.render(React.createElement('div', {}, [
  React.createElement(App, {}, "Hi")
]), document.getElementById("root"))
