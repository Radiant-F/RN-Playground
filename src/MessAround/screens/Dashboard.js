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
      <Button
        title="Flatlist"
        onPress={() => navigation.navigate('FlatList')}
      />
      <Button title="PNM PIN" onPress={() => navigation.navigate('PIN')} />
    </View>
  );
};

export default Dashboard;
