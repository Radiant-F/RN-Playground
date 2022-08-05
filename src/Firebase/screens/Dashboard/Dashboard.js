import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {utilsReducer} from '../../redux/reducer/utils';
import {SET_LOADING} from '../../redux/ActionTypes';
import auth from '@react-native-firebase/auth';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const {user_data} = useSelector(state => state.auth);

  function signOut() {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out.');
        navigation.replace('Auth');
      })
      .catch(error => console.log(error));
  }

  return (
    <View>
      {/* <Text>Welcome {user.email}</Text> */}
      <Button title="sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({});
