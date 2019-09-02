import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail imageSource={require('../../assets/mountain.jpg')}/>
        </View>
    ) 
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;
