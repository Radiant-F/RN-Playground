import {ToastAndroid} from 'react-native';
import * as api from '../../utils/APIs';
import errorHandler from '../../utils/errorHandler';
import {FETCH_ALL, LOADING} from '../actionTypes';

export const getTodos = token => async dispatch => {
  try {
    const {data} = await api.fetchTodos(token);
    if (data.length) return dispatch({type: FETCH_ALL, payload: data});
  } catch (error) {
    errorHandler(error, dispatch, 'Terjadi kesalahan');
  }
};
