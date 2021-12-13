<<<<<<< HEAD
import React from 'react';
import { Styles } from './DailyRidesStyles'
import { SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
=======
import React, { useState } from 'react';
import { Styles } from './DailyRidesStyles'
import { SafeAreaView, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
>>>>>>> f113e38e... naming conflict resolve

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[Styles.item, backgroundColor]}>
    <Text style={[Styles.title, textColor]}>{item.title}</Text>
    <Text style={[Styles.text, textColor]}>When: {item.date} </Text>
    <Text style={[Styles.text, textColor]}>Pace: {item.pace} </Text>
    <Text style={[Styles.text, textColor]}>Distance: {item.distance}</Text>
    <Text style={[Styles.text, textColor]}>{item.leader}</Text>
  </TouchableOpacity>
);
const currentDate = new Date(Date.now()); // get current date
var today = currentDate.toDateString(); //date into readable string format
if (today.substring(8, 9) == "0") {
  today = today.slice(0, 8) + today.slice(9)
}; //remove 0 if one digit date

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      data: [],
      refreshing: true,
    }
  }

  componentDidMount() {
    this.fetchRides();
  }

  fetchRides() {
    this.setState({ refreshing: true });

    fetch('https://cascade-api.herokuapp.com/calendar')
      .then((response) => response.json())
      .then((data) => {
        const dailyRides = data.map((element, index) => {
          return {
            id: index,
            title: element.title,
            url: element.url,
            date: element.date,
            pace: element.pace,
            distance: element.distance,
            leader: element.leader,
            location: element.location,
          };
        });
        this.setState({ data: dailyRides });
        this.setState({ refreshing: false });
      }).catch(e => {
        this.setState({
          data: [
            {
              id: 0,
              title: e.toString()
            }
          ]
        });
        this.setState({ refreshing: false });
        console.log(e);
      });
  }
  renderItemComponent = ({ item }) => {
    const backgroundColor = item.id === this.state.selectedId ? '#787a7d' : '#e1e3e6';
    const color = item.id === this.state.selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={(e) => {
          e.preventDefault();
          this.setState({ selectedId: item.id });
          InAppBrowser.open('https://cascade.org' + item.url, {
            showTitle: false,
            toolbarColor: '#0176ae',
            secondaryToolbarColor: 'black',
            navigationBarColor: 'black',
            navigationBarDividerColor: 'white',
            enableUrlBarHiding: true,
            enableDefaultShare: true,
            forceCloseOnRedirection: false,
            hasBackButton: true,
          });
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  handleRefresh = () => {
    this.setState({ refreshing: false }, () => { this.fetchRides() }); // call fetchRides after setting the state
  }

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={(item) => {
            const d = item.item.date; //datestring representing the date, pulled for each item
            let rideDate = '';
            d[10] === ',' ? rideDate = d.slice(0, 3) + d.slice(4, 10) + d.slice(11, 16) :
              rideDate = d.slice(0, 3) + d.slice(4, 11) + d.slice(12, 17);
            if (rideDate === today) {
              return this.renderItemComponent(item)
            };
          }
          }
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this.ItemSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </SafeAreaView>
    )
  }
};
