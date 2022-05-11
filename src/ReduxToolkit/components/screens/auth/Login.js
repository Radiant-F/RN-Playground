import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../../redux/actions/auth';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({email: null, password: null});
  const {navigate} = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={{color: 'black'}}
        placeholderTextColor={'grey'}
        placeholder="email"
        underlineColorAndroid={'blue'}
        onChangeText={input => setFormData({...formData, email: input})}
      />
      <TextInput
        style={{color: 'black'}}
        placeholderTextColor={'grey'}
        placeholder="email"
        underlineColorAndroid={'blue'}
        onChangeText={input => setFormData({...formData, password: input})}
        secureTextEntry
      />
      <Button
        title="login"
        onPress={() => dispatch(login({formData, navigate}))}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
