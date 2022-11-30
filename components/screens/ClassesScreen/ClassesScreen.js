import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, Alert, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './ClassesStyles';


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

const ClassesScreen = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const getData = async () => {
    setLoading(true);
    const resp = await fetch("https://cascade-api.herokuapp.com/classes");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    getData();

  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        {
          loading ?
            (
              <View style={Styles.container}>
                <ActivityIndicator
                  animating={true}
                  visible={loading}
                  size="large"
                  color="#0176ae"
                  textContent={'Loading...'} />
              </View>
            )
            :
            data.map(({ title, body, url, image }) => (
              <View key={url} >
                <Text key={title} style={Styles.title}>
                  {title}
                </Text>
                <Image key={image}
                  source={{ uri: image }}
                  style={Styles.image}

                />
                <Text key={body} style={Styles.classesItem} >{body}</Text>
                <View key={url} style={Styles.button}>
                  <Button
                    type="solid"
                    title="Read more"
                    color="#F55243"
                    size={6}
                    onPress={(e) => {
                      e.preventDefault();
                      openLink(url)
                    }}
                  />
                </View>
              </View>
            ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClassesScreen;
