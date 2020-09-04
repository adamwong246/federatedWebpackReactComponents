import * as React from 'react';

const Chunk = React.lazy(() => import ('app1/Chunk.js'));

export default class App extends React.Component {
  constructor(a) {
    super(a);

    this.state = {name: "someone"}
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({name: e.target.value})
  }

  render() {
    return (<div>
      <p></p>
      <React.Suspense fallback='Loading header'>
        <input type="text" onChange={this.onChange} value={this.state.name}/>
        <Chunk name={this.state.name}>Hello this is App 2</Chunk>
        <p>
          This example shows how a React component can be imported, at run-time. There are 2 webpack bundles in play- "alpha" which contains the `App` and "beta" which contains the `Chunk` component.  `App` lazily loads `Chunk` through some extra hooks and you can see this as seperate network requests in the debugger. These are 2 completely seperated codebases- in this example, they live in the same repo and are hosted at the same domain but note that the have their own webpack filew and are generated seperately and that one can use this technique to download React components, or any other js bundles for that matter, from other outside sources!
        </p>
      </React.Suspense>
    </div>);
  }
}
