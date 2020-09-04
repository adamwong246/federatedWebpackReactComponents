import * as React from 'react';

const Chunk = React.lazy(() => import ('app1/Chunk.js'));

export default class App extends React.Component {
  constructor(a) {
    super(a);

    this.state = {
      loadbyFederation: false
    }
  }

  render() {
    return (<div style={{
        margin: '20px'
      }}>
      <React.Suspense fallback='Loading header'>
        <Chunk>Hello this is App 2</Chunk>
      </React.Suspense>
    </div>);
  }
}
