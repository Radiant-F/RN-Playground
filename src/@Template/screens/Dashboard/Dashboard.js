import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {utilsReducer} from '../../redux/reducer/utils';
import {SET_LOADING} from '../../redux/ActionTypes';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const {loading, refresher} = useSelector(state => state.utils);

  return (
    <View>
      <Text>{loading ? 'loading' : 'not loading'}</Text>
      <Button
        title="dispatch loading"
        onPress={() =>
          dispatch(utilsReducer({type: SET_LOADING, value: !loading}))
        }
      />
      <Button title="auth" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
}

const styles = StyleSheet.create({});
