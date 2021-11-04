import {StyleSheet} from 'react-native';

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
    // backgroundColor: '#434345',
    
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
    // backgroundColor: '#64c5e8',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
    fontSize: 14
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
