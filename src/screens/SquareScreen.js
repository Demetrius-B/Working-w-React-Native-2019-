import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const [red,
        setRed] = useState(0)
    const [green,
        setGreen] = useState(0)
    const [blue,
        setBlue] = useState(0)

    console.log('RED:',red)
    console.log('GREEN:',green)
    console.log('BLUE:',blue)

    return (
        <View>
            <ColorCounter
                onIncrease={() => setRed(red + 1)}
                onDecrease={() => setRed(red - 1)}
                color="red"/>

            <ColorCounter
                onIncrease={() => setGreen(green + 1)}
                onDecrease={() => setGreen(green - 1)}
                color="green"/>

            <ColorCounter
                onIncrease={() => setBlue(blue + 1)}
                onDecrease={() => setBlue(blue - 1)}
                color="blue"/>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 31
    }
})

export default SquareScreen;