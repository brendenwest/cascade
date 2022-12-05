import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, Alert, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './AdvocacyStyles';

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

const AdvocacyScreen = () => {

  const [advocacy, setAdvocacy] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
        const resp = await fetch("https://cascade-api.herokuapp.com/advocate");
        const data = await resp.json();
        setAdvocacy(data);
        setLoading(false);
    } catch (err) {
        console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        {
          loading ? (
              <ActivityIndicator
                  style={Styles.loadingIndicator}
                  animating={true}
                  visible={loading}
                  size="large"
                  color="#0176ae" />
            )
            :
            advocacy.map(({ title, url, image }) => (
              <View key={url} style={Styles.box}>
                  <Text style={Styles.titles}
                    onPress={(e) => {
                        e.preventDefault();
                        openLink('https://cascade.org' + url);
                    }}
                  >{title}</Text>
                  <Image key={image}
                    source={{ uri: image }}
                    style={Styles.image}
                  />
                  <View key={url} style={Styles.button}>
                    <Button
                      type="solid"
                      title="Read more"
                      color="#F55243"
                      size={6}
                      onPress={(e) => {
                        e.preventDefault();
                        openLink('https://cascade.org' + url);
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

export default AdvocacyScreen;