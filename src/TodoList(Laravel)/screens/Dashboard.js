import React from 'react';
import {View, Text, Button} from 'react-native';

function Dashboard({navigation}) {
  return (
    <View>
      <Text>a</Text>
      <Button title="pindah" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

export default Dashboard;
