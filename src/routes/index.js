import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Main from '../components/Main';
import Single from '../components/Single';
import PhotoGrid from '../components/PhotoGrid';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={Main} />
      <Route exact path="/" component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </div>
  </Router>
);

export default Routes;
