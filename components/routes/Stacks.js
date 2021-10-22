import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen/CalendarScreen";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={() => ({
            headerStyle: {
              backgroundColor: '#0176ae',
            },
            headerTintColor: '#ffffff',
            headerTitleAlign: 'center'
          })}
        >
          <Stack.Screen name="Cascade" component={HomeScreen} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
