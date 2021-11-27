import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./CalendarStyles";

const calendarURL = "https://cascade-api.herokuapp.com/calendar";

const CalendarScreen = () => {
  const [calendar, setCalendar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(calendarURL)
      .then((res) => res.json())
      .then((res) => {
        setCalendar(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            {calendar.map(({ title, url, date, pace, distance, leader }) => (
              <View key={url} style={Styles.calendarItem}>
                <Text style={Styles.title}>{title}</Text>
                <Text style={Styles.date}>{date}</Text>
                <Text style={Styles.calendarText}>
                  {pace + "   " + distance}{" "}
                </Text>
                <Text style={Styles.calendarText}>{leader}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;
