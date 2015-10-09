export default class extends Relay.Route {
  static queries = {
    files: () => Relay.QL`
      query {
        files,
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
