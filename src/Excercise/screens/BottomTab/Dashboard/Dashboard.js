import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Dashboard() {
  return (
    <View>
      <Icon name="chevron-left" size={100} />
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
