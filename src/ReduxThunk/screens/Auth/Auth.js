import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Login} from '../../components/exports';

export default function Auth({navigation}) {
  return (
    <View>
      <Login navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({});
