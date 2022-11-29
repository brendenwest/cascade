import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  classesItem: {
    fontSize: 16,
    color: 'gray',
    margin: 10,
  },
  date: {
    fontSize: 10,
  },
  button: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 400,
    height: 200,
    resizeMode: 'stretch',
  }
});
