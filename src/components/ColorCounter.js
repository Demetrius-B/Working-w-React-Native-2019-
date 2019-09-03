import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const ColorCounter = ({color}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} />
            <Button title={`Decrease ${color}`}  />
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 31
    }
})

export default ColorCounter;