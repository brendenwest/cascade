import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultDrawer } from './components/routes/Drawer';

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
