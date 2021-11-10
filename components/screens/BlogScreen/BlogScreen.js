import { useIsFocused } from '@react-navigation/core';
import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, ScrollView, Linking, Button} from 'react-native';
import { Image } from 'react-native-elements';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Styles} from './BlogStyleSheet';

var blogData = [];

// async function getBlogData() {
//   let response = await fetch('https://cascade-api.herokuapp.com/blog');
//   let dataPromise = await response.json();
//   dataPromise.forEach(data => blogData.push(data));

//   // console.log('OUTSIDE', blogData);
// }
// getBlogData();


const BlogScreen = () => {
  
    const [data, setData] = useState([]);
    const isFocused = useIsFocused();
  
    const getData = async () => {
      const resp = await fetch("https://cascade-api.herokuapp.com/blog");
      const data = await resp.json();
      setData(data);
      console.log(data);
    };
    useEffect(() => {
      console.log('Called');
      if(isFocused) {
      getData();
     
      }

    }, []);
 
  return (
    <SafeAreaView>
    <ScrollView>
     
      {data.map(({title, postDate, body, url}) => (
         <View key = {url}>
          <Text key={title} style={Styles.title}>
            {title}
          </Text>
          <Text style={Styles.date}
          key={postDate}>{postDate}</Text>
          <Image key={'rc34'}
          source={{uri: 'https://cbc-drupal-assets.s3.amazonaws.com/styles/blog_image/s3/blog/leafy%20and%20dank%20%283%29.JPG?R2Pc9TRNWsiPfO0asl_VSPULtFDI4Dqs&itok=O8FLO9W1'}}
          style={Styles.image}
          
           />
          <Text key={body} style={Styles.blogItem} >{body}</Text>
          <View key={url} style = {{ width: 200, height: 50 }}>
          <Button
          style={Styles.button}
          type="solid"
          title="Read more"
          color="#F55243"
          size={6}
    onPress={(e) => {
      e.preventDefault();
      InAppBrowser.open('http://www.cascade.org' + url);
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
