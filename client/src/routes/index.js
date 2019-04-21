import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import components
import Main from '../components/Main';
import Single from '../components/Single';
import PhotoGrid from '../components/PhotoGrid';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Main} />
      <Route exact path="/" component={PhotoGrid} />
      <Route path="/view/:postId" comments={Single} />
    </div>
  </BrowserRouter>
);

export default Routes;
