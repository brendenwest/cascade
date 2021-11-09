import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './CalendarStyle';

//fetch data from the server
const calendarURL = 'https://cascade-api.herokuapp.com/calendar';

const CalendarScreen = () => {

   const [isLoading, setLoading] = useState(true);
   const [calendarData, setCalendarData] = useState([]);



  useEffect(() => {
    fetch(calendarURL)
      .then(response => response.json())
      .then(json =>
         setCalendarData(json))
      .catch(error => alert(error))
      .finally(setLoading(false));
  }, []);

  //console.log(calendarData);

  //rendering
  return (
    <SafeAreaView>
    <ScrollView>
     
      {calendarData.map(({title, url, date, pace, distance, leader }) => (
        <>
          <Text key={title} style={Styles.title}>
            {title}
          </Text>
          <Text style={Styles.date} key={date}>{date}</Text>
          
          <Text key={date} style={Styles.calendarItem} >{date}</Text>
          <Text key={pace} style={Styles.calendarItem} >{pace}</Text>
          <Text key={distance} style={Styles.calendarItem} >{distance}</Text>
          <Text key={leader} style={Styles.calendarItem} >{leader}</Text>

          <View key={url} style = {{ width: 200, height: 50 }}>
    
          </View>
        </>
      ))
    }
    </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;