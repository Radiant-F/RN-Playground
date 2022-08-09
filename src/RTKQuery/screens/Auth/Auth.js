import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Signin, Signup} from '../../components';
import {useDispatch, useSelector} from 'react-redux';

export default function Auth() {
  const dispatch = useDispatch();
  const {status, user_data} = useSelector(state => state.auth);

  return (
    <View>
      <Text>
        {status == 'pending'
          ? 'Loading..'
          : status == 'success'
          ? 'Success'
          : status == 'error'
          ? 'Error'
          : 'Auth'}
      </Text>
      <Signin />
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({});
