import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Todos} from '../../components/exports';

export default function Dashboard({navigation, route}) {
  const {token} = route.params;
  return (
    <View>
      <Text>Dashboard</Text>
      <Todos token={token} />
    </View>
  );
}

const styles = StyleSheet.create({});
