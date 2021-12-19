import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback
      useForeground
      onPress={() => navigation.goBack()}
      background={TouchableNativeFeedback.Ripple(null, false, 20)}>
      <View style={styles.iconBack}>
        <Icon name="chevron-left" size={35} />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  iconBack: {
    padding: 10,
    marginRight: 10,
    marginLeft: -10,
  },
});

export default BackButton;
