import React from 'react';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, ScrollView, Text, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Styles } from './IndiRideStyles';

export default App = ({route, navigation}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { url } = route.params; //set the url node for corresponding api address
    useFocusEffect(
        React.useCallback(() => {
            fetch('https://cascade-api.herokuapp.com' + url)           
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
            }, []));
    if (loading) {
        return(
            <View style={Styles.container}>
            <ActivityIndicator
            animating={true}
            visible={loading}
            size="large"
            color="#0176ae"
            textContent={'Loading...'} />
            </View> 
        ) 
    }
        return (
            <View style={Styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 } }>
                <View >
                    <Text style={Styles.title}>{data.title}</Text>
                    <Text style={Styles.date}> Date and Time: {data.datetime}</Text>
                    <Text style={Styles.date}> Pace: {data.pace}</Text>
                    <Text style={Styles.date}> Distance: {data.distance}</Text>
                    <Text style={Styles.date}> Elevation: {data.elevation}</Text>
                    <Text style={Styles.date}> Terrain: {data.terrain}</Text>
                    <Text style={Styles.date}> Regroup: {data.elevation}</Text>
                    <Text style={Styles.date}> Weather: {data.terrain}</Text>
                    <View style={Styles.separator} />
                    <Text style={Styles.blogItem}>        
                    Leader Contact Information: {'\n'} 
                    {data.contact.name}{'\n'} 
                    {data.contact.email}{'\n'} 
                    {data.contact.phone}
                    </Text>                                   
                    <View style={Styles.separator} />
                    <Button
                    style={Styles.button}
                    type="solid"
                    title="Register Now!"
                    color="#F55243"
                    size={6}
                    onPress={(e) => {
                        e.preventDefault();
                        InAppBrowser.open('https://cascade.org' + url + '/register', {
                            showTitle: false,
                            toolbarColor: '#0176ae',
                            secondaryToolbarColor: 'black',
                            navigationBarColor: 'black',
                            navigationBarDividerColor: 'white',
                            enableUrlBarHiding: true,
                            enableDefaultShare: true,
                            forceCloseOnRedirection: false,
                            hasBackButton: true,
                          }
                        );
                    }}
                    />
                    <Text></Text>
                    <Text style={Styles.blogItem} >Ride Description: {data.description}</Text>
                </View>  
                <TouchableOpacity style={Styles.navBarLeftButton}>
                    <Icon
                    name='info'
                    type='font-awesome'
                    color='#f50'
                    /> 
                    <Text>  </Text>
                    <Text style={Styles.blogItem}> {data.interests}</Text> 
                    <Text>  </Text>
                    <Icon
                    raised
                    name='external-link-square'
                    type='font-awesome'
                    color='#f50'
                    onPress={(e) => {
                        e.preventDefault();
                        InAppBrowser.open(data.links, {
                            showTitle: false,
                            toolbarColor: '#0176ae',
                            secondaryToolbarColor: 'black',
                            navigationBarColor: 'black',
                            navigationBarDividerColor: 'white',
                            enableUrlBarHiding: true,
                            enableDefaultShare: true,
                            forceCloseOnRedirection: false,
                            hasBackButton: true,
                          }
                        );}} />
                </TouchableOpacity>   
            </ScrollView>   
        </View>
    ) 
};
