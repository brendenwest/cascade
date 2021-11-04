import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, ScrollView, Linking, Button} from 'react-native';
import { Image } from 'react-native-elements';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Styles} from './BlogStyleSheet';

var blogData = [];

async function getBlogData() {
  let response = await fetch('https://cascade-api.herokuapp.com/blog');
  let dataPromise = await response.json();
  dataPromise.forEach(data => blogData.push(data));

  // console.log('OUTSIDE', blogData);
}
getBlogData();
var bData = null;


const BlogScreen = () => {
  
    const [data, setData] = useState(null);
  
    const getData = async () => {
      const resp = await fetch("https://cascade-api.herokuapp.com/blog");
      const data = await resp.json();
      setData(data);
    };
    // useEffect(() => {
    //   getData();
    //   bData = data;

    // }, []);
 
  return (
    <SafeAreaView>
    <ScrollView>
     
      {blogData.map(({title, postDate, body, url}) => (
        <>
          <Text key={title} style={Styles.title}>
            {title}
          </Text>
          <Text style={Styles.date} key={postDate}>{postDate}</Text>
          <Image
          source={{uri: 'https://cbc-drupal-assets.s3.amazonaws.com/styles/blog_image/s3/blog/leafy%20and%20dank%20%283%29.JPG?R2Pc9TRNWsiPfO0asl_VSPULtFDI4Dqs&itok=O8FLO9W1'}}
          style={Styles.image}
          
           />
          <Text key={body} style={Styles.blogItem} >{body}</Text>
          <View key={url} style = {{ width: 200, height: 50 }}>
          <Button
          style={Styles.button}
          type="solid"
          title="Read more"
          color="#8fa5c9"
          size={6}
    onPress={(e) => {
      e.preventDefault();
      InAppBrowser.open('http://www.cascade.org' + url);
      }}
/>
</View>
        </>
      ))
    }
    </ScrollView>
    </SafeAreaView>
  );
};

export default BlogScreen;
