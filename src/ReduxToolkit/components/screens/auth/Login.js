import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../../redux/actions/auth';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.auth);
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
      {status == 'loading' ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="login"
          onPress={() => dispatch(login({formData, navigate}))}
        />
      )}
      {status == 'error' && <Text>Terjadi kesalahan</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});
