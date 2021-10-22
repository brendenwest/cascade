import React from 'react';
import { Styles } from './HomeStyleSheet';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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

      <View style={Styles.fixToText}>
        <Button
          title=" Calendar"
          icon={
            <Icon
              name="calendar"
              size={20}
              color="white"
            />}
          onPress={() => navigation.navigate('Calendar')}
        />
        <Button
          title=" Blog"
          icon={
            <Icon
              name="podcast"
              size={20}
              color="white"
            />}
          onPress={() => Alert.alert('Opening the Blog')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;