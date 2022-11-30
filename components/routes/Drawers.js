import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeTab } from './Tabs';
import { Image } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/AntDesign';
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import ContactScreen from "../screens/ContactScreen/ContactScreen";
import AdvocacyScreen from '../screens/AdvocacyScreen/AdvocacyScreen.js';
import ResourcesScreen from '../screens/Resources/ResourcesScreen.js';


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
          } else if (route.name === "Advocacy") {
            iconName = 'team';
          } else if (route.name === "Resources") {
            iconName = 'cloudo';
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
        <Drawer.Screen name="Contact Us" component={ContactScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                tintColor={'white'}
                onPress={() => navigation.goBack()}
              />
            )
          })} />
        <Drawer.Screen name="Advocacy" component={AdvocacyScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                tintColor={'white'}
                onPress={() => navigation.goBack()}
              />
            )
          })} />
        <Drawer.Screen name="Resources" component={ResourcesScreen}
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