import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  Akun,
  Chart,
  Dashboard,
  DashboardYaumi,
  Keranjang,
  Lainnya,
  List,
  PIN,
  Profile,
} from './routes';
import {BackButton} from '../components/screens/@exports';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();
function Navigator() {
  const ThemeAing = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      text: 'black',
    },
    dark: true,
  };
  return (
    <NavigationContainer theme={ThemeAing}>
      <Stack.Navigator screenOptions={{headerLeft: () => <BackButton />}}>
        <Stack.Screen
          component={Dashboard}
          name="Dashboard"
          options={{headerLeft: null}}
        />
        <Stack.Screen component={Profile} name="Profile" />
        <Stack.Screen component={Chart} name="Chart" />
        <Stack.Screen component={DashboardYaumi} name="DashboardYaumi" />
        <Stack.Screen component={List} name="FlatList" />
        <Stack.Screen component={PIN} name="PIN" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();
function BottomTabs() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#00bdbd'}}>
      <Tab.Screen
        component={Dashboard}
        name="Rumah"
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        component={Keranjang}
        name="Keranjang"
        options={{
          tabBarIcon: 'cart',
        }}
      />
      <Tab.Screen
        component={Akun}
        name="Akun"
        options={{
          tabBarIcon: 'account',
        }}
      />
      <Tab.Screen
        component={Lainnya}
        name="Lainnya"
        options={{
          tabBarIcon: 'home',
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigator;
