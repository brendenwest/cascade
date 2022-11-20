import React from 'react';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { StyleSheet, SafeAreaView, StatusBar, Text, FlatList, TouchableOpacity, Image, View, TouchableHighlight } from 'react-native';

async function openLink(urlToOpen) {
  try {
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(urlToOpen, {
        showTitle: false,
        toolbarColor: '#0176ae',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        hasBackButton: true,
      })
    }
    else Linking.openURL(urlToOpen)
  } catch (error) {
    console.log(error.message)
  }
}

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Image source={{ uri: item.image }} />
  </TouchableOpacity>
);

const App = (props) => {
  const [selectedId, setSelectedId] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(true);  
  
  React.useEffect(() => {
    fetch('https://cascade-api.herokuapp.com/explore')
      .then((response) => response.json())
      .then((data) => {
        const resources = data.map((element) => {
          return {
            title: element.title,
            url: element.url,
            image: element.image,
          };
        });
        setData(resources);
        setRefreshing(false);
      }).catch(e => {
        console.log(e);
      });
  }, []);

  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <View style={[styles.container]}>
        <TouchableHighlight
          onPress={() => openLink(item.url)}>
        <Image 
          style={styles.image}
          source={{ uri: item.image }} 
        />
        </TouchableHighlight>
        <Item
          item={item}
          onPress={() => openLink(item.url)}
          textColor={{ color }}
        />    
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(data) => data.title}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    flexDirection:'column', 
    justifyContent:'center',
    backgroundColor: '#0176ae',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: "grey",
    borderWidth: 1,
  },
  item: {
    borderWidth: .5,
    padding: 5,
    paddingLeft: 10,
    marginVertical: 0,
    marginHorizontal: 0,
    marginBottom: 0,

  },
  title: {
    fontSize: 26,
  },
});

export default App;