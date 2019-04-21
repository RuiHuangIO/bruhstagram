import React from 'react';
import Routes from './routes/index';

const App = () => {
  // Wrap <Router /> in <Provider /> so that route handlers can get access to the store.
  return <Routes />;
};

export default App;
