import * as React from 'react';

export default class Chunk extends React.Component{
  constructor(a) {
    super(a);
  }

  render() {
    return (
      React.createElement('div', {}, [
          React.createElement('h3', {}, "Hello Chunk.js"),
      ])

    )
  }
}
