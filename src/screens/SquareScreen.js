import React, { useReducer } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

// useReducer - Hook, Add some functionality to a component.

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    return (
        <View>
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="red"/>

            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="green"/>

            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
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