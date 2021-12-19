function reducer(state = {token: null}, action) {
  switch (action.type) {
    case 'GLOBAL_TYPE':
      return {...state, ...action.payload};
  }
  return state;
}

export default reducer;
