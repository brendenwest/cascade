import React from 'react';
import { Styles } from './SocialMediaStyles';
import { View, Text, Alert, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const StayConnected = () => {

  return (
    <View>
      <View>
        <Text style={Styles.stayConnectedTxt}>STAY CONNECTED</Text>
      </View>
      <View style={Styles.stayConnectedBtn}>
        <Pressable onPress={() => Alert.alert('Redirecting to Facebook')}>
          <Icon
            name='facebook-with-circle'
            size={40}
            color='white'
          />
        </Pressable>
        <Pressable onPress={() => Alert.alert('Redirecting to Twitter')}>
          <Icon
            name='twitter-with-circle'
            size={40}
            color='white'
          />
        </Pressable>
        <Pressable onPress={() => Alert.alert('Redirecting to Instagram')}>
          <Icon
            name='instagram-with-circle'
            size={40}
            color='white'
          />
        </Pressable>
        <Pressable onPress={() => Alert.alert('Redirecting to YouTube')}>
          <Icon
            name='youtube-with-circle'
            size={40}
            color='white'
          />
        </Pressable>
      </View>
    </View>
  );
};

export default StayConnected;