import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './ContactStyle'
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import { Image } from 'react-native-elements';


const ContactUsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={Styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <MapView  
          style={Styles.mapStyle}  
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 47.687900543213,   
            longitude:  -122.264999389650,  
            latitudeDelta:  0.04,  
            longitudeDelta: 0.05,  
          }}>  
          <Marker  
            coordinate={{ latitude: 47.687900543213, longitude: -122.264999389650 }}  
            title={"Cascade Bicycle Club"}  
          />  
        </MapView> 
        <Image source={{uri: 'https://cbc-drupal-assets.s3.amazonaws.com/4Culture%206.jpg?uvIqU4aApji.E73jBKIOGzB2Tm.Z3Sax'}}
       style={Styles.image} />
      </ScrollView>
    </View >
    
  );
};

export default ContactUsScreen;