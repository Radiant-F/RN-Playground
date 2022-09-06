import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}) {
  return (
    <View>
      <Text>SplashScreen</Text>
      <Button
        title="navigasi ke auth"
        onPress={() => navigation.navigate('Authentication')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
