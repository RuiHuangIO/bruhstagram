import { createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments,
};

const history = createBrowserHistory();
const store = createStore(rootReducer(history), defaultState);

export default store;
