import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../Gap';

export default function FormInput({password = true}) {
  return (
    <View style={styles.container}>
      <Icon name="email-outline" color={'black'} size={20} />
      <Gap width={10} />
      <TextInput style={{flex: 1}} placeholder={'Enter Email'} />
      {password && <Icon name="" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff70',
    flexDirection: 'row',
    height: 45,
    borderRadius: 45 / 2,
    overflow: 'hidden',
    alignItems: 'center',
    paddingHorizontal: 15,
    maxWidth: 250,
  },
});
