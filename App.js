import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultDrawer } from './components/routes/Drawers';

// Ignore the Reanimated 2 warning
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DefaultDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
