import React from 'react';
import {View, Text, Button} from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <View>
      <Text>a</Text>
      <Button
        onPress={() => navigation.navigate('StickyHeader')}
        title="sticky header"
      />
      <Button
        onPress={() => navigation.navigate('CollapsibleHeader')}
        title="animated header"
      />
    </View>
  );
};

export default Dashboard;
