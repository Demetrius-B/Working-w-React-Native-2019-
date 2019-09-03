import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red,
        setRed] = useState(0)
    const [green,
        setGreen] = useState(0)
    const [blue,
        setBlue] = useState(0)

    const setColor = (color) => {
        
    }

    return (
        <View>
            <ColorCounter
                onIncrease={() => setRed(red + COLOR_INCREMENT)}
                onDecrease={() => setRed(red - COLOR_INCREMENT)}
                color="red"/>

            <ColorCounter
                onIncrease={() => setGreen(green + COLOR_INCREMENT)}
                onDecrease={() => setGreen(green - COLOR_INCREMENT)}
                color="green"/>

            <ColorCounter
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
                color="blue"/>

            <View
                style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 31
    }
})

export default SquareScreen;