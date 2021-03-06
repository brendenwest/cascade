import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#64c5e8",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  calendarItem: {
    backgroundColor: "#eeeeee",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 14,
  },
  calendarText: {
    fontSize: 14,
  },
  date: {
    fontWeight: "bold",
    fontSize: 16,
  }
});
