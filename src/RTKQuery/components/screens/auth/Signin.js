import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSignIn, fetchUserDetail} from '../../../redux/api/auth';

export default function Signin() {
  const dispatch = useDispatch();
  const {user_data, user_detail} = useSelector(state => state.auth);
  const formData = {email: 'radiant@gmail.com', password: '12345678'};
  console.log(user_detail);

  return (
    <View>
      <Text>Signin</Text>
      <Button
        title="fetch signin"
        onPress={() => dispatch(fetchSignIn(formData))}
      />
      {user_data?.token && (
        <Button
          title="fetch user detail"
          onPress={() => dispatch(fetchUserDetail(user_data?.token))}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
