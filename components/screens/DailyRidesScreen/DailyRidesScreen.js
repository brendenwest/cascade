import React, { useState } from 'react';
import { Styles } from './DailyRidesStyles.js'; 
import { SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: "**CANCELLED** Saturday Snohomish Co. Moderate ride (Willis Tucker Park/Snohomish)",
    url: "/node/74367",
    date: "Sat. Nov 6, 2021 8:55am",
    pace: "Moderate: [14-16mph]",
    distance: "39.50 miles",
    leader: "Ride Leader(s): Michael J Upsall",
    location: {
      "street": "Kirkland Transit Center, 308 Kirkland Ave",
      "city": "Kirkland",
      "state": "WA",
      "postal-code": "98033",
      "google-map-link": "http://maps.google.com/?q=47.676026500000,-122.202897600000"
    }
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: "Eastside Hills #18",
    url: "/node/74365",
    date: "Sat. Nov 6, 2021 9:00am",
    pace: "Vigorous: [18-20mph]",
    distance: "50.00 miles",
    leader: "Ride Leader(s): Radu BanJoe L Sullivan",
    location: {
      "street": "Kirkland Transit Center, 308 Kirkland Ave",
      "city": "Kirkland",
      "state": "WA",
      "postal-code": "98033",
      "google-map-link": "http://maps.google.com/?q=47.676026500000,-122.202897600000"
    }
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Ride Around Redmond",
    url: "/node/74276",
    date: "Sat. Nov 6, 2021 9:30am",
    pace: "Steady: [12-14mph]",
    distance: "28.30 miles",
    leader: "Ride Leader(s): Mahesh Gopalan",
    location: {
      "street": "Lake Sammamish Trail Parking, 17600 NE 70th ST",
      "city": "Redmond",
      "state": "WA",
      "postal-code": "98052",
      "google-map-link": "http://maps.google.com/?q=47.666692672943,-122.103360799200"
    }
  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[Styles.item, backgroundColor]}>
    <Text style={[Styles.title, textColor]}>{item.title}</Text>
    <Text style={[Styles.text, textColor]}>When: {item.date} </Text>
    <Text style={[Styles.text, textColor]}>Pace: {item.pace} </Text>
    <Text style={[Styles.text, textColor]}>Distance: {item.distance}</Text>
    <Text style={[Styles.text, textColor]}>{item.leader}</Text>
  </TouchableOpacity>
);

const DailyRidesScreen = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? '#787a7d' : '#e1e3e6';
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };

    return (
      <SafeAreaView style={Styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    );
};

export default DailyRidesScreen;
