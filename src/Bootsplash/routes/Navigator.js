import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Auth,
  Dashboard,
  DrawerContent,
  Media,
  Misc,
  Profile,
  Settings,
  Videos,
} from '../screens';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {utilsReducer} from '../redux/reducer/utils';
import {SET_FOCUSED_SCREEN} from '../redux/ActionTypes';

const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export function StackNavigator() {
  const {focused_screen} = useSelector(state => state.utils);
  function navBarColor() {
    switch (focused_screen) {
      case 'Home':
        return 'dodgerblue';
      case 'Media':
        return 'orange';
      default:
        return 'white';
    }
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: navBarColor(),
      }}>
      <Stack.Screen component={BottomNavigator} name="Dashboard" />
      <Stack.Screen component={Auth} name="Auth" />
      <Stack.Screen component={Settings} name="Settings" />
      <Stack.Screen component={Videos} name="Videos" />
    </Stack.Navigator>
  );
}

export function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen component={StackNavigator} name="DrawerDashboard" />
    </Drawer.Navigator>
  );
}

export function BottomNavigator() {
  const dispatch = useDispatch();
  return (
    <BottomTab.Navigator
      screenListeners={({route}) =>
        dispatch(utilsReducer({type: SET_FOCUSED_SCREEN, value: route.name}))
      }>
      <BottomTab.Screen
        component={Dashboard}
        name="Home"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={23}
            />
          ),
        }}
      />
      <BottomTab.Screen
        component={Media}
        name="Media"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'image-multiple' : 'image-multiple-outline'}
              color={color}
              size={23}
            />
          ),
        }}
      />
      <BottomTab.Screen
        component={Misc}
        name="Misc"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={
                focused
                  ? 'dots-horizontal-circle'
                  : 'dots-horizontal-circle-outline'
              }
              color={color}
              size={23}
            />
          ),
        }}
      />
      <BottomTab.Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'account' : 'account-outline'}
              color={color}
              size={23}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
