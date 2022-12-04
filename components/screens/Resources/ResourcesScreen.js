import React from 'react';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { SafeAreaView, Text, FlatList, TouchableOpacity, Image, View, TouchableHighlight, ActivityIndicator, Button } from 'react-native';
import { Styles } from './ResourcesStyles';

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

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={Styles.title}>{item.title}</Text>
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
    return (
      <View style={[Styles.box]}>
        <Item
          item={item}
          onPress={() => openLink(item.url)}
        />
        <TouchableOpacity
          onPress={() => openLink(item.url)}>
        <Image 
          style={Styles.image}
          source={{ uri: item.image }} 
        />
        </TouchableOpacity>
        <View style={Styles.button}>
            <Button
                type="solid"
                title="Read more"
                color="#F55243"
                size={6}
                onPress={(e) => {
                    e.preventDefault();
                    openLink(item.url);
            }}
            />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
        {
            refreshing ? (
                <ActivityIndicator
                    style={Styles.loadingIndicator}
                    animating={true}
                    visible={refreshing}
                    size="large"
                    color="#0176ae" />
            )
            :
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(data) => data.title}
        extraData={selectedId}
      />
        }
    </SafeAreaView>
  );
};

export default App;