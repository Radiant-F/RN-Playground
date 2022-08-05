import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {authReducer} from '../../redux/reducer/auth';
import {SET_USER_DATA} from '../../redux/ActionTypes';

export default function Splash({navigation}) {
  const dispacth = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      const unsubscribe = auth().onAuthStateChanged(user => {
        if (user) {
          dispacth(
            authReducer({type: SET_USER_DATA, value: JSON.stringify(user)}),
          );
          navigation.replace('MainApp');
        } else return navigation.replace('Auth');
      });
      return unsubscribe();
    }, 2000);
  }, []);
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
