import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: "#64c5e8",
    fontWeight: "bold",
  },
  calendarItem: {
    backgroundColor: "#eeeeee",
    fontSize: 14,
    marginLeft: 30,
    borderWidth: 1,
    borderLeftWidth: 10,
    borderColor: '#a0a1a3',
    borderRadius: 10,
    margin: 12,
    padding: 15,
  },
  calendarText: {
    fontSize: 18,
    color: '#464a54',
    marginLeft: 30,
    marginTop: 5,
  },
  date: {
    fontSize: 15,
    color: '#464a54',
    marginBottom: 5,
  },
  loadingIndicator: {
    marginTop: 100
  }
});
