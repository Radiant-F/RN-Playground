import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Cart, Dashboard, Order, Profile} from '../screens';

const Stack = createNativeStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={BottomNavigator}
          name="MainApp"
          options={{
            navigationBarColor: 'transparent',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();
function BottomNavigator() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: 'dodgerblue'}}>
      <Tab.Screen
        component={Dashboard}
        name="Home"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Cart}
        name="Cart"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'cart' : 'cart-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Order}
        name="Order"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={26} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
