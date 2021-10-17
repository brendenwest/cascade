import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './components/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
};

export default App;
