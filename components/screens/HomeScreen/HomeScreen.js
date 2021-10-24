import React from 'react';
import { Styles } from './HomeStyleSheet';
import { View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.title}>
          Home View
        </Text>
      </View>

      <View style={Styles.separator} />

      <View>
        <Text style={Styles.title}>
          Live interactive section of the screen. Rotates between "Join" and "Daily Featured Rides"
        </Text>
      </View>

      <View style={Styles.separator} />
    </View>
  );
};

export default HomeScreen;