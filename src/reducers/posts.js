// Reducer takes in two things:
// 1. Action (info about what happened)
// 2. Copy of current state

// initialzie the function with es6 default argument to avoid type-checking for undefined
const posts = (state = [], action) => {
  console.log(state, action);
  return state;
};

export default posts;
