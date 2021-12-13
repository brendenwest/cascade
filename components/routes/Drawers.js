import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeTab } from './Tabs';
import { Image } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/AntDesign';
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import IndiRide from "../screens/IndiRideScreen/IndiRideScreen";

const Drawer = createDrawerNavigator();

export const DefaultDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Group screenOptions={({ route }) => ({
        headerShown: true,
        drawerIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home ") {
            iconName = 'home';
          } else if (route.name === "About") {
            iconName = 'questioncircle';
          } else if (route.name === "Contact Us") {
            iconName = 'phone';
          }
          return <Icon name={iconName} size={size} color={color} />
        },
        headerStyle: { backgroundColor: '#0176ae' },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      })} >
        <Drawer.Screen name="Home " component={HomeTab}
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 208, height: 50 }}
                source={{ uri: 'https://cascade.org/sites/all/themes/f1omega/f1ux/logo.png' }}
              />
            )
          }}
        />
        <Drawer.Screen name="About" component={AboutScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                tintColor={'white'}
                onPress={() => navigation.goBack()}
              />
            )
          })} />

        <Drawer.Screen name="IndiRideTest" component={IndiRide}  />

      </Drawer.Group>
    </Drawer.Navigator>
  );
};