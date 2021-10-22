import React from 'react';
import { styles } from './HomeStyleSheet';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Home View
        </Text>
      </View>

      <View style={styles.separator} />

      <View>
        <Text style={styles.title}>
          Live interactive section of the screen. Rotates between "Join" and "Daily Featured Rides"
        </Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.fixToText}>
        <Button
          title=" Calendar"
          icon={
            <Icon
              name="calendar"
              size={20}
              color="white"
            />}
          onPress={() => Alert.alert('Opening the Calendar')}
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