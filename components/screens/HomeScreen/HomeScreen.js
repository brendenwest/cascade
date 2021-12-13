import React from 'react';
import { Button } from 'react-native-elements';
import { Styles } from './HomeStyles';
import { ImageBackground, TouchableOpacity, View, Image, Text } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <ImageBackground source={{ uri: 'https://images.squarespace-cdn.com/content/v1/554265d0e4b00f9b9e16638f/1612648585952-GPZAB4WG9BYFDKKNLZFI/pqA9EUPw.jpeg?format=2500w' }} resizeMode="cover">
        <View style={Styles.ridesBtnContainer}>
          <Button
            title='Daily Featured Rides'
            type='clear'
            titleStyle={{
              fontWeight: 'bold',
              fontSize: 30
            }}
            icon={
              <Icon
                name="bicycle"
                size={55}
                color="#0176ae"
              />
            }
            onPress={() => navigation.navigate('Daily Rides')}
          />
        </View>
        <View style={Styles.webBtnContainer}>
          <TouchableOpacity
            style={Styles.joinBtn}
            onPress={(e) => {
              e.preventDefault(); InAppBrowser.open('https://cascade.org/membership', {
                showTitle: false,
                toolbarColor: '#0176ae',
                secondaryToolbarColor: 'black',
                navigationBarColor: 'black',
                navigationBarDividerColor: 'white',
                enableUrlBarHiding: true,
                enableDefaultShare: true,
                forceCloseOnRedirection: false,
                hasBackButton: true,
              })
            }}
          >
            <Text style={Styles.btnText}>JOIN CASCADE</Text>
            <Image style={Styles.btnImage} source={{ uri: "https://cascade.org/sites/all/themes/f1omega/f1ux/images/bikerbg-orange.png" }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.volunteerBtn}
            onPress={(e) => {
              e.preventDefault(); InAppBrowser.open('https://cascade.org/about/volunteer', {
                showTitle: false,
                toolbarColor: '#0176ae',
                secondaryToolbarColor: 'black',
                navigationBarColor: 'black',
                navigationBarDividerColor: 'white',
                enableUrlBarHiding: true,
                enableDefaultShare: true,
                forceCloseOnRedirection: false,
                hasBackButton: true,
              })
            }}
          >
            <Text style={Styles.btnText}>BE A VOLUNTEER</Text>
            <Image style={Styles.btnImage} source={{ uri: "https://cascade.org/sites/all/themes/f1omega/f1ux/images/bikerbg-yellow.png" }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.donateBtn}
            onPress={(e) => {
              e.preventDefault(); InAppBrowser.open('https://cascade.org/donate', {
                showTitle: false,
                toolbarColor: '#0176ae',
                secondaryToolbarColor: 'black',
                navigationBarColor: 'black',
                navigationBarDividerColor: 'white',
                enableUrlBarHiding: true,
                enableDefaultShare: true,
                forceCloseOnRedirection: false,
                hasBackButton: true,
              })
            }}
          >
            <Text style={Styles.btnText}>DONATE TO US</Text>
            <Image style={Styles.btnImage} source={{ uri: "https://cascade.org/sites/all/themes/f1omega/f1ux/images/bikerbg-purple.png" }} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;