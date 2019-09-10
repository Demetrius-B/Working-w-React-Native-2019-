import React, {useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

// useReducer - Hook, Add some functionality to a component.

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number} action: an object that
    // tells me how to change my state object. action === { colorToChange: 'red ||
    // 'blue' || 'green', amount: 15 || -15}

    switch (action.colorToChange) {
        case 'red':
            // NEVER DO THIS: state.red = state.red - 15 Rebuild state object into new
            // object w/ changed value Make new object {Copy everything from old state,
            // Overwrite new red state prop}
            return {
                ...state,
                red: state.red + action.amount
            }
        case 'green':
            return {
                ...state,
                green: state.green + action.amount
            }
        case 'blue':
            return {
                ...state,
                blue: state.blue + action.amount
            }
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state,
        dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0
    });
    const {red, green, blue} = state;

    // dispatch === runMyReducer

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({
                colorToChange: 'red',
                amount: -1 * COLOR_INCREMENT
            })}
                color="red"/>

            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({
                colorToChange: 'green',
                amount: -1 * COLOR_INCREMENT
            })}
                color="green"/>

            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({
                colorToChange: 'blue',
                amount: -1 * COLOR_INCREMENT
            })}
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