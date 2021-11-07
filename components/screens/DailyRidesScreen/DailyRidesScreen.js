import React from 'react';
import { Styles } from './DailyRidesStyleSheet';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import Card from  '../../shared/card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Ride',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Ride',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Ride',
  },
];

const Item = ({ title }) => (
  <View style={Styles.item}>
    <Text style={Styles.title}>{title}</Text>
  </View>
);

const DailyRidesScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );  
    return (
      <SafeAreaView style={Styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );

    // <View style={Styles.container}>
    //   <View>
    //     <Text style={Styles.title}>
    //       Featured Daily Rides
    //     </Text>
    //   </View>

      /* <View style={Styles.separator} />

      <View>
        <Text style={Styles.title}>
        This section will display up to three daily rides feeding from rides API
        </Text>
      </View>

      <View style={Styles.separator} />

      <FlatList
        style={{
          flex: 1,
          // alignSelf: 'flex-start'
        }}
        keyExtractor={(item) => item.id}  
        data={rides}
        renderItem={({ item }) => (
          <Text style={Styles.text}>{item.name}</Text>
        )}
      />
        <Card>
          <Text>View on a Map</Text>
          <Text>Free Group Rides Map </Text>
          <Text>Renton to the Alki Lighthouse</Text>  
          <Text>Wed, 11/03/2021 - 10:00am | Renton</Text>  
          <Text>Pace: Steady: [12-14mph] | Distance: 37 miles</Text> 
          <Text>Register Now!</Text>  
        </Card>


    </View>
  );
}; */
};

export default DailyRidesScreen;