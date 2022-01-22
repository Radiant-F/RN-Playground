import React from 'react';
import {View, Text} from 'react-native';
import {Amalan, Profile} from '../../components/screens/YaumiSantri/@export';

function Dashboard() {
  return (
    <View style={{paddingVertical: 10}}>
      {/* <Profile /> */}
      <Amalan />
    </View>
  );
}

export default Dashboard;
