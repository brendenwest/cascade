import React, { useState } from 'react';
import { Styles } from './DailyRidesStyleSheet';
import { SafeAreaView, View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
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

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[Styles.item, backgroundColor]}>
    <Text style={[Styles.title, textColor]}>{item.title}</Text>
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