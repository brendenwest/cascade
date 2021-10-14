import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
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
          title="Calendar"
          onPress={() => Alert.alert('Opening the Calendar')}
        />
        <Button
          title="Blog"
          onPress={() => Alert.alert('Opening the Blog')}
        />
      </View>
    </SafeAreaView>
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

export default App;