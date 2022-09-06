import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Authentication,
  Dashboard,
  DrawerContent,
  Settings,
  SplashScreen,
} from '../screens';

const Stack = createNativeStackNavigator();
export function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen
        name="Dashboard"
        component={DrawerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
export function DrawerScreen() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="DashboardDrawer" component={Dashboard} />
    </Drawer.Navigator>
  );
}
