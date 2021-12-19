import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <View>
      <Text>a</Text>
      <Button
        title="yaumi santri"
        onPress={() => navigation.navigate('DashboardYaumi')}
      />
      <Button
        title="pindah ke chart"
        onPress={() => navigation.navigate('Chart')}
      />
    </View>
  );
};

export default Dashboard;
