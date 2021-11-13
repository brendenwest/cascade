import React from 'react';
import { Styles } from './HomeStyles';
import { View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View>
        <Image source={{uri: 'https://cascade.org/sites/all/themes/f1omega/f1ux/logo.png'}}
       style={{ width: 200, height: 200, resizeMode: 'contain'}} />
        <Text style={Styles.title}>
          Live interactive section of the screen. Rotates between "Join" and "Daily Featured Rides"
        </Text>

      </View>
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Button
          title=' Daily Featured Rides'
          type='clear'
          backgroundColor="#0176ae"
          icon={
            <Icon
              name="bicycle"
              size={25}
              color="#0176ae"
            />
          }
          onPress={() => navigation.navigate('Daily Rides')}
        />
      </View>
    </View>
    
  );
};

export default HomeScreen;