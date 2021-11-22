import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 18,
    color: 'gray',

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  blogItem: {
    fontSize: 16,
    color: 'gray',
    margin: 10,
  },
  date: {
    fontSize: 10,
  },
  button: {
    marginHorizontal:200,
    alignSelf: 'center',

  },
  image: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 400,
    height: 200,
    resizeMode: 'stretch',
  }
});
