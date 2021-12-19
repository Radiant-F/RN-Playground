function token(value) {
  return {
    type: 'GLOBAL_TYPE',
    payload: {token: value},
  };
}

function userData(value) {
  return {
    type: 'GLOBAL_TYPE',
    payload: {user_data: value},
  };
}

export {token, userData};
