import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { Styles } from './ContactStyle'
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import { Image } from 'react-native-elements';
import InAppBrowser from 'react-native-inappbrowser-reborn';

const ContactUsScreen = ({ navigation }) => {

const contactUrl = 'https://cascade.org/about-staff/who-contact';

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={Styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Image source={{uri: 'https://cbc-drupal-assets.s3.amazonaws.com/4Culture%206.jpg?uvIqU4aApji.E73jBKIOGzB2Tm.Z3Sax'}}
       style={Styles.image} />
      <Text p>Our office is currently closed to the public during the COVID-19 pandemic.</Text>
      <Text p>For general inquiries, email us at info@cascade.org, or call the front desk: (206) 522-3222</Text>
      <Text p ></Text>
      <Text p><Text style={{ fontWeight: "bold"}}>If you have specific questions or materials requests, please see our who to contact page.</Text></Text>
      <Button
                style={Styles.button}
                type="solid"
                title="WHO TO CONTACT"
                color="#2c7adb"
                size={6}
                onPress={(e) => {
                  e.preventDefault();
                  InAppBrowser.open(contactUrl);
                }}
              />
      <Text p ></Text>
      <Text p><Text style={{ fontWeight: "bold", color: "orange" }}>FOR SUMMER CAMPS IN SOUTH SEATTLE</Text></Text>
      <Text p><Text style={{ fontWeight: "bold"}}>White Center Bike Playground</Text></Text>
      <Text p><Text style={{ fontWeight: "bold"}}>11050 10th Ave SW</Text></Text>
      <Text p><Text style={{ fontWeight: "bold"}}>Seattle, WA 98146</Text></Text>
      <Text p ></Text>
      <Text p>Open to the public during park hours</Text>
      <Text p>A partnership of Cascade, King County Parks, YES! Foundation and the White Center Community Development Association (CDA), the new Bike Playground features a small-scale streetscape (where the old tennis courts used to be) complete with realistic road markings and obstacles, where people can practice riding in a safe and comfortable setting. In 2017, Cascade offer bicycle camps, community riding events and more at the Bike Playground.</Text>
      <Text p ></Text>
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

      <Text p style={Styles.contactText}>Cascade Bicycle Club</Text>
      <Text p style={Styles.contactText}>7787 62nd Ave NE</Text>
      <Text p style={Styles.contactText}>Seattle, WA 98115</Text>
      <Text p style={Styles.contactText}>United States</Text>

      </ScrollView>
    </View >
    
  );
};

export default ContactUsScreen;