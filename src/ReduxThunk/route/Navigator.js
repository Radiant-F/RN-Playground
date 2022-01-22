import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Akun, Dashboard, Keranjang} from './routes';

const Stack = createNativeStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={BottomTabs} name="Dashboard" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen component={Dashboard} name="Dashboard" />
      <Tab.Screen component={Keranjang} name="Keranjang" />
      <Tab.Screen component={Akun} name="Akun" />
    </Tab.Navigator>
  );
}

export default Navigator;
