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
    fontSize: 14,
    color: 'gray',
  },
  date: {
    fontSize: 10,
  },
  button: {
    widhth: 8,
    height: 4,
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 200,
    height: 100,
  }
});
