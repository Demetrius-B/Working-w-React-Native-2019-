import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 31
    }
})

export default ColorCounter;