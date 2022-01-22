import React from "react";
import {View,Text, StyleSheet, Image, Dimensions} from "react-native";
import { formatPhotoUri } from "../api/api";

const {width} = Dimensions.get('window');

const DetailsScreen = ({ route , navigation }) =>{
    const {item} = route.params;
    const id = item.id;
    return(
        <View style={container}>
            <View style={image}>
                <Image
                    source={{
                        width: width,
                        height: width,
                        uri: formatPhotoUri(id, width, width),
                      }}
                />
            </View>
            <View style={{ flex: 1, marginLeft: 10, justifyContent: 'space-around'}}>
                <Text style={text} >ID : {id}</Text>
                <Text style={text} >Author : {JSON.stringify(item.author)}</Text>
                <Text style={text} >URL : {JSON.stringify(item.url)}</Text>
                <Text style={text} >Download_url : {JSON.stringify(item.download_url)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    image:{

    },
    text:{
       fontSize: 20,
       fontWeight: 'bold'
    }

})

const {container,image,text} = styles;

export default DetailsScreen;