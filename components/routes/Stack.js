import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DailyRidesScreen from '../screens/DailyRidesScreen/DailyRidesScreen'

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    //   screenOptions={{
    //     headerMode: 'screen',
    //     headerTintColor: 'white',
    //     headerStyle: { backgroundColor: 'tomato' },
    //   }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Cascade',
        }}
      />
      <Stack.Screen
        name="Daily Rides"
        component={DailyRidesScreen}
        options={{
          title: 'Featured Rides',
        }}
      />
    </Stack.Navigator>
  );
}