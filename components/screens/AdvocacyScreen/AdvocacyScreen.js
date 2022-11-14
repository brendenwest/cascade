import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, Alert, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './AdvocacyStyles';

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
                  style={Styles.indicator}
                  animating={true}
                  visible={loading}
                  size="large"
                  color="#0176ae" />
            )
            :
            advocacy.map(({ title, url, image }) => (
              <View key={url} style={Styles.box}>
                  <Image key={image}
                    source={{ uri: image }}
                    style={Styles.image}
                  />
                  <Text style={Styles.titles}
                    onPress={() =>
                      InAppBrowser.open("https://cascade.org" + url, {
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
                  > {title} </Text>
              </View>
            ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdvocacyScreen;