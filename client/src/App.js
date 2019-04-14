import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Main} />
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
