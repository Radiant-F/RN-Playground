import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Akun = () => {
  return (
    <View style={styles.alignment}>
      <Text>Rp. 30000</Text>
      <Image
        source={require('../../components/assets/images/pencil.png')}
        style={{width: 20, height: 20}}
      />
      <View style={{width: 70}} />
    </View>
  );
};

const styles = StyleSheet.create({
  alignment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Akun;
