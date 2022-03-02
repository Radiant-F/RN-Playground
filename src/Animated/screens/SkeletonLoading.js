import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonContent from '../components/screen/SkeletonContent';

export default function SkeletonLoading() {
  return (
    <View>
      <SkeletonContent />
    </View>
  );
}

const styles = StyleSheet.create({});
