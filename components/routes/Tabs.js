import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen/CalendarScreen";
import BlogScreen from '../screens/BlogScreen/BlogScreen';

const Tab = createBottomTabNavigator();

export const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Calendar') {
              iconName = 'calendar';
            } else if (route.name === 'Blog') {
              iconName = 'newspaper-o';
            }
            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#43b02a',
          tabBarInactiveTintColor: 'gray',
        })} >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Blog" component={BlogScreen} />
      </Tab.Group>
    </Tab.Navigator >
  );
};