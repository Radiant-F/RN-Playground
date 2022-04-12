import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderAnimatedScroll from '../components/screen/HeaderAnimatedScroll';
import HeaderAnimatedScrollview from '../components/screen/HeaderAnimatedScrollview';
import TileScroll from '../components/screen/TileScroll';

export default function ScrollAnimation() {
  return (
    <View style={{flex: 1}}>
      <TileScroll />
    </View>
  );
}

const styles = StyleSheet.create({});
