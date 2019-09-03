import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    return (
        <View>
            <ColorCounter color="red" />
            <ColorCounter color="green" />
            <ColorCounter color="blue" />
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 31
    }
})

export default SquareScreen;