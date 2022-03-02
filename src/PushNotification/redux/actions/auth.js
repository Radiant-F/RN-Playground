import * as api from '../../utils/APIs';
import {LOADING, LOGIN} from '../actionTypes';
import errorHandler from '../../utils/errorHandler';

export const postLogin = (formData, navigation) => async dispatch => {
  dispatch({type: LOADING, payload: true});
  try {
    const {data} = await api.fetchLogin(formData);
    dispatch({type: LOGIN, payload: data.token});
    if (data.token) {
      navigation.replace('Dashboard', {token: data.token});
    } else return errorHandler(data, dispatch, 'Data tidak ditemukan');
  } catch (error) {
    errorHandler(error, dispatch, 'Data tidak ditemukan');
  }
};
