import React from 'react';
import { Styles } from './DailyRidesStyles'
import { SafeAreaView, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[Styles.item]}>
    <Text style={[Styles.title, textColor]}>{item.title}</Text>
    <Text style={Styles.text}>- {item.date} </Text>
    <Text style={Styles.text}>{item.pace + "   " + item.distance}</Text>
    <Text style={Styles.text}>{item.leader}</Text>
  </TouchableOpacity>
);
const currentDate = new Date(Date.now()); // get current date
var today = currentDate.toDateString(); //date into readable string format
if (today.substring(8, 9) == "0") {
  today = today.slice(0, 8) + today.slice(9)
}; //remove 0 if one digit date

export default class App extends React.Component {
  constructor(props, navigation) {
    super(props, navigation);
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
    let color = item.id === this.state.selectedId ? '#64c5e8' : '#64c5e8';

    if (item.title.slice(0, 1) === "*") {
      color = 'red';
    }

    return (
      <Item
        item={item}
        onPress={(e) => {
          e.preventDefault();
          this.setState({ selectedId: item.id });        
          this.props.navigation.navigate ('Individual Ride', {
            url: item.url, }); //passing url props to the next screen 'Individual Ride'
        }}
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
        {
            this.state.refreshing ? (
                <ActivityIndicator
                    style={Styles.loadingIndicator}
                    animating={true}
                    visible={this.state.refreshing}
                    size="large"
                    color="#0176ae" />
            )
            :
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
          }}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={this.ItemSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
        }
      </SafeAreaView>
    )
  }
};