import * as React from 'react';

export default class App extends React.Component{
  constructor(a) {
    super(a);

    this.state = {loadbyFederation: false}
  }

  render() {
    return (
      React.createElement('div', {}, [
          React.createElement('h2', {}, "Hello App.js"),
          React.createElement('button', {}, "click me to load a react component via webpack federation"),
      ])

    )
  }
}
