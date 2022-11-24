import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 22,
    backgroundColor: '#434345',

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  blogItem: {
    fontSize: 14,
    color: '#737373',
  },
  date: {
    fontSize: 16,
    color: 'black',
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
  },
  navBarLeftButton: {

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});