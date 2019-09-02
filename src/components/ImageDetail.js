import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = (props) => {
    console.log(props)
    return (
        <View>
            <Image source={require('../../assets/beach.jpg')} />
            <Text>Image #12</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail;
