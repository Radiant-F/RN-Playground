import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Chart, Dashboard, DashboardYaumi, Profile} from './routes';
import {BackButton} from '../components/screens/@exports';

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
      <Stack.Navigator>
        <Stack.Screen component={Dashboard} name="Dashboard" />
        <Stack.Screen
          component={Profile}
          name="Profile"
          options={{headerLeft: () => <BackButton />}}
        />
        <Stack.Screen
          component={Chart}
          name="Chart"
          options={{headerLeft: () => <BackButton />}}
        />
        <Stack.Screen
          component={DashboardYaumi}
          name="DashboardYaumi"
          options={{headerLeft: () => <BackButton />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
