import 'babel/polyfill';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Widget list</h1>
        <ul>
          {this.props.files.edges.map(edge =>
            <li>{edge.node.name} (ID: {edge.node.id})</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    files: () => Relay.QL`
      fragment on Query {
        files(first: 10) {
          edges {
            node {
              id,
              url,
            }
          }
        }
      }
    `,
  },
});
