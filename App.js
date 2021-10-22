import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeStack } from './components/routes/Stacks';

const App = () => {
  return (
    <SafeAreaProvider>
      <HomeStack />
    </SafeAreaProvider>
  );
};

export default App;
