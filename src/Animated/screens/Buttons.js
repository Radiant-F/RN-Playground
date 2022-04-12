import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BouncyButton from '../components/screen/BouncyButton';

export default function Buttons() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Button</Text>
      <BouncyButton />
    </View>
  );
}

const styles = StyleSheet.create({});
