import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Dashboard, Settings, Profile, Something} from '../screens/exports';
import {useTranslation} from 'react-i18next';

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{tabBarLabel: t('navigate:home')}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{tabBarLabel: t('navigate:settings')}}
      />
      <Tab.Screen name="Something" component={Something} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
