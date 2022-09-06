import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {utilitiesReducer} from '../../redux/reducers/utilities';
import {SET_LOADING} from '../../redux/ActionTypes';

export default function Authentication({navigation}) {
  const {loading} = useSelector(state => state.utilities);
  const dispatch = useDispatch();
  console.log(loading);
  return (
    <View>
      <Text>Authentication</Text>
      <Button
        title="change state"
        onPress={() =>
          dispatch(utilitiesReducer({type: SET_LOADING, value: true}))
        }
      />
      <Button
        title="navigasi ke dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
