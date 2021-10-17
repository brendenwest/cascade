import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Separator = () => (
  <View style={styles.separator} />
);

const HomeScreen = () => {
  return (
   <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Home View
        </Text>
      </View>

      <Separator />

      <View>
        <Text style={styles.title}>
          Live interactive section of the screen. Rotates between "Join" and "Daily Featured Rides"
        </Text>
      </View>

      <Separator />

      <View style={styles.fixToText}>
        <Button
          title=" Calendar"
          icon={
            <Icon
            name="calendar"
            size={20}
            color="white"
            />  }
          onPress={() => Alert.alert('Opening the Calendar')}
        />
        <Button
          title=" Blog"
          icon={
          <Icon
          name="podcast"
          size={20}
          color="white"
          />  }
          onPress={() => Alert.alert('Opening the Blog')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;