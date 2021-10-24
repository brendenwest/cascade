import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen/CalendarScreen";

const Tab = createBottomTabNavigator();

export const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Group screenOptions={() => ({ headerShown: false })} >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};