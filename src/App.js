import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Routes from './routes/index';
import * as actionCreators from './actions/actions';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);

export default App;
