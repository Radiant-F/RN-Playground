import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Login, Register} from '../../components/exports';
import {authType} from '../../redux/auth';

export default function Auth() {
  const dispatch = useDispatch();
  const {auth_type} = useSelector(state => state.auth);

  return (
    <View>
      <Text>Auth</Text>
      <Button
        title="change auth type"
        onPress={() =>
          dispatch(authType(auth_type == 'login' ? 'register' : 'login'))
        }
      />
      {auth_type == 'login' ? <Login /> : <Register />}
    </View>
  );
}

const styles = StyleSheet.create({});
