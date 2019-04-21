import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.PureComponent {
  componentWillMount() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Bruhstagram!</Link>
        </h1>
      </div>
    );
  }
}

export default Main;
