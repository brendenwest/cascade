import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DailyRidesScreen from '../screens/DailyRidesScreen/DailyRidesScreen'

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerShown: true
      }}
    >
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Daily Rides"
        component={DailyRidesScreen}
        options={{
          title: 'Daily Featured Featured Rides',
        }}
      />
    </Stack.Navigator>
  );
}