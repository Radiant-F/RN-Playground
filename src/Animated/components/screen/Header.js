import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.view}>
      <Text>ini header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 50,
    backgroundColor: 'aqua',
    elevation: 3,
  },
});
