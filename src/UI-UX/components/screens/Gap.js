import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Gap({
  width,
  height,
  marginVertical,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}) {
  return (
    <View
      style={{
        width,
        height,
        marginVertical,
        marginHorizontal,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
      }}
    />
  );
}
