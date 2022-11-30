import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    marginLeft: 30,
    borderLeftWidth: 10,
    borderColor: '#464a54',
    borderRadius: 10,
    margin: 20,
    padding: 15,
    backgroundColor: '#eeeeee',
  },
  title: {
    fontSize: 30,
    color: '#64c5e8',
    fontWeight: 'bold',
    margin: 5,
  },
  image: {
    width: 500,
    height: 260,
    resizeMode: 'stretch',
    borderRadius: 3,
    marginBottom: 15,
    marginTop: 5,
  },
  loadingIndicator: {
    marginTop: 100
  },
  button: {
    width: 200,
    height: 50,
    alignSelf: 'center',
  },
});
