import {Button} from 'react-native';
import React from 'react';
import Ping from 'react-native-ping';

export default function Dashboard() {
  const myInterval = setInterval(myTimer, 1000);
  async function myTimer() {
    try {
      const ms = await Ping.start('114.114.114.114', {timeout: 1000});
      console.log('ping', ms);
    } catch (error) {
      console.log('special code', error.code, error.message);
    }
  }
  return <Button title="stop ping" onPress={() => clearInterval(myInterval)} />;
}
