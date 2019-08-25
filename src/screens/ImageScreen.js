import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ImageDetail from './ImageScreen'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail />
            <ImageDetail />
            <ImageDetail />
        </View>
    ) 
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;
