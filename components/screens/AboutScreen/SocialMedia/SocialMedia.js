import React from 'react';
import { Styles } from './SocialMediaStyles';
import { View, Text, Alert, Pressable, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const StayConnected = () => {

  const openURL = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Sorry, there is an Error with this link.`);
    }
  };

  return (
    <View style={Styles.element}>
      <View>
        <Text style={Styles.stayConnectedTxt}>STAY CONNECTED</Text>
      </View>
      <View style={Styles.stayConnectedBtn}>
        <Pressable onPress={() => openURL('https://facebook.com/CascadeBicycleClub')}>
          <Icon
            name='facebook-with-circle'
            size={40}
            color='white'
          />
        </Pressable>
        <Pressable onPress={() => openURL('https://twitter.com/cascadebicycle')}>
          <Icon
            name='twitter-with-circle'
            size={40}
            color='white'
          />
        </Pressable>
        <Pressable onPress={() => openURL('https://www.flickr.com/photos/cascadebicycleclub')}>
          <Icon
            name='flickr-with-circle'
            size={40}
            color='white'
          />
        </Pressable>
        <Pressable onPress={() => openURL('https://www.youtube.com/user/cascadebicyclevideo')}>
          <Icon
            name='youtube-with-circle'
            size={40}
            color='white'
          />
        </Pressable>
        <Pressable onPress={() => openURL('https://www.instagram.com/cascadebicycle/')}>
          <Icon
            name='instagram-with-circle'
            size={40}
            color='white'
          />
        </Pressable>
      </View>
      <View style={Styles.stayConnectedBtn}>
        <Pressable onPress={() => openURL('https://cascade.org/membership')}>
          <Text style={Styles.joinDonateShoptxt}>JOIN</Text>
        </Pressable>
        <Pressable onPress={() => openURL('https://cascade.org/donate')}>
          <Text style={Styles.joinDonateShoptxt}>DONATE</Text>
        </Pressable>
        <Pressable onPress={() => openURL('https://cbcmerchandise.com/cbc')}>
          <Text style={Styles.joinDonateShoptxt}>SHOP</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default StayConnected;