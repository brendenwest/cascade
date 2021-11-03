import React from 'react';
import { Styles } from './DailyRidesStyleSheet';
import { View, Text } from 'react-native';

const DailyRidesScreen = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.title}>
          Featured Daily Rides
        </Text>
      </View>

      <View style={Styles.separator} />

      <View>
        <Text style={Styles.title}>
        This section will display up to three daily rides feeding from rides API
        </Text>
      </View>
      <View>
        <Text>
        View on a Map
        Free Group Rides Map
        Renton to the Alki Lighthouse
        Wed, 11/03/2021 - 10:00am | Renton
        Pace: Steady: [12-14mph] | Distance: 37 miles
        Register Now!
        </Text>
       </View>
      <View style={Styles.separator} />
    </View>
  );
};

export default DailyRidesScreen;