import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './CalendarStyle';

//fetch data from the server
const calendarURL = 'https://cascade-api.herokuapp.com/calendar';


//create a calendar screen
const CalendarScreen = () => {
    const [calendar, setCalendar] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = ["street", "city", "state", "postal-code", "google-maplink"];
    //fetch data from the server
    useEffect(() => {
        fetch(calendarURL)
        .then(res => res.json())
        .then(res => {
            setCalendar(res);
            setIsLoading(false);
        })  //end of then
        .catch(err => console.log(err));
    }, []); //end of useEffect

    //render the calendar screen
    return (

        <SafeAreaView style={Styles.container}>
            <ScrollView>
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : ( 
                    <View>
                        {calendar.map((item, index) => (
                            <View key={index} style={Styles.calendarItem}>
                                <Text style={Styles.date}>{item.date}</Text>
                                <Text style={Styles.title}>{item.title}</Text>
                                <Text style={Styles.calendarItem}>{item.description}</Text>
                                <Text style={Styles.calendarItem}>{item.location}</Text>
                                <Text style={Styles.calendarItem}>{item.time}</Text>
                            </View>
                        ))}
                       //render location array
                       <ol>
                        {location.map((address) => (
                          <li>{address}</li>
                        ))}
                      </ol>

                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

export default CalendarScreen;