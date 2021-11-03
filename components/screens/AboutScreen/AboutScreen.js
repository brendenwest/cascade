import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Styles } from './AboutStyles';
import StayConnected from './SocialMedia/SocialMedia';

const AboutScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={Styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Text h2 style={Styles.aboutText}>About Cascade</Text>
        <Text p >Cascade Bicycle Club, the nation’s largest statewide bicycling nonprofit, serves bike riders of all ages, races, genders, income levels, and abilities throughout the state of Washington. We teach the joys of bicycling, advocate for safe places to ride, and produce world-class rides and events. Our signature programs include the Seattle to Portland, Free Group Rides, the Pedaling Relief Project, the Advocacy Leadership Institute, the Bike Walk Roll Summit, Let's Go, and the Major Taylor Project.</Text>
        <Text p>Cascade currently serves more than 8,900 members, has 26 professional staff, and more than 250 volunteers. </Text>
        <Text h4 style={Styles.aboutText}>Vision:</Text>
        <Text p>We envision a safe and healthy future where bicycles bring people together, eliminate inequity, and create thriving communities.</Text>
        <Text h4 style={Styles.aboutText}>Mission:</Text>
        <Text p>Cascade Bicycle Club brings people together to experience the joy of bicycling through transportation, recreation, and friendship. We collaborate with members, volunteers, and community partners to inspire people to advocate for a safe, equitable, and sustainable Washington state. We build confidence, leadership, knowledge, and community by teaching bicycle skills to all ages​</Text>
        <Text h4 style={Styles.aboutText}>Values:</Text>
        <Text p><Text style={{ fontWeight: "bold" }}>Equity:</Text> We lead with a racial equity lens to eliminate inequities in community health outcomes and in mobility and transportation access. Bicycles are a tool for liberation.</Text>
        <Text p><Text style={{ fontWeight: "bold" }}>Climate Justice:</Text> Bicycles are a clean, healthy, and affordable solution to help solve the climate crisis, reduce transportation pollution, and create sustainable communities.</Text>
        <Text p><Text style={{ fontWeight: "bold" }}>Community:</Text> We create opportunities for people to come together by removing barriers and fostering a sense of belonging. Bicycles are an integral part of creating connected, equitable and thriving communities.</Text>
        <Text p><Text style={{ fontWeight: "bold" }}>Safety:</Text> Safety is a right; we champion spaces that foster physical and emotional wellbeing.</Text>
        <Text p><Text style={{ fontWeight: "bold" }}>Collaboration:</Text> We share power, resources, and knowledge as a means to enrich lives and form mutually beneficial partnerships. We celebrate the existing strengths of our partners and participants and seek to be an accessible asset for others.</Text>
      </ScrollView>
      <StayConnected style={Styles.stayConnectedContainer} />
    </View >
  );
};

export default AboutScreen;