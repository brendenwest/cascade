import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeTab } from './Tabs';
import { HeaderBackButton } from '@react-navigation/elements';
import AboutScreen from "../screens/AboutScreen/AboutScreen";

const Drawer = createDrawerNavigator();

export const DefaultDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Group screenOptions={() => ({
        headerStyle: { backgroundColor: '#0176ae' },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      })} >
        <Drawer.Screen name="Cascade" component={HomeTab} />
        <Drawer.Screen name="About" component={AboutScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                tintColor={'white'}
                onPress={() => navigation.goBack()}
              />
            )
          })} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};