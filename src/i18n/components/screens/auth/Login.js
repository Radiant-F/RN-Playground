import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputForm from '../InputForm';
import {useDispatch, useSelector} from 'react-redux';
import {postLogin} from '../../../redux/actions/auth';

export default function Login({navigation}) {
  const {loading} = useSelector(state => state.utilities);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({email: '', password: ''});
  function submitForm() {
    dispatch(postLogin(formData, navigation));
  }

  return (
    <View>
      <Text>Login</Text>
      <InputForm
        onChangeText={input => setFormData(state => ({...state, email: input}))}
      />
      <InputForm
        onChangeText={input =>
          setFormData(state => ({...state, password: input}))
        }
      />
      <Button title="login" onPress={submitForm} />
      {loading && <ActivityIndicator size="large" />}
    </View>
  );
}

const styles = StyleSheet.create({});
