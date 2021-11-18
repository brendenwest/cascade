import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, Alert, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './BlogStyles';


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
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        hasBackButton: true,
      })
      console.log(JSON.stringify(result));
    }
    else Linking.openURL(urlToOpen)
  } catch (error) {
    console.log(error.message)
  }
}

const BlogScreen = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const getData = async () => {
    setLoading(true);
    const resp = await fetch("https://cascade-api.herokuapp.com/blog");
    const data = await resp.json();
    setData(data);
    setLoading(false);
    console.log(data);
  };
  useEffect(() => {
    console.log('useEffect called');
    getData();

  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        {
          loading ?
            (
              
              <View>
              <ActivityIndicator
                animating={true}
                visible={loading}
                size="large"
                color="#0176ae"
                textContent={'Loading...'} />
                </View>
              //   <View>
              //   <Text>...Loading</Text>
              // </View>
            )

            :
            data.map(({ title, postDate, body, url, image }) => (
              <View key={url}>
                <Text key={title} style={Styles.title}>
                  {title}
                </Text>
                <Text style={Styles.date}
                  key={postDate}>{postDate}</Text>
                <Image key={image}
                  source={{ uri: image }}
                  style={Styles.image}

                />
                <Text key={body} style={Styles.blogItem} >{body}</Text>
                <View key={url} style={{ width: 200, height: 50 }}>
                  <Button
                    style={Styles.button}
                    type="solid"
                    title="Read more"
                    color="#F55243"
                    size={6}
                    onPress={(e) => {
                      e.preventDefault();
                      openLink('http://www.cascade.org' + url);
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

export default BlogScreen;
