import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function InputForm({
  onChangeText,
  placeholder = '',
  underlineColorAndroid = 'blue',
}) {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      underlineColorAndroid={underlineColorAndroid}
    />
  );
}

const styles = StyleSheet.create({});
