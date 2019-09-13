import React, {useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

// useReducer - Hook, Add some functionality to a component.

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number} 
    // action: an object that tells me how to change my state object. 
    // action === { type: 'change_red || 'change_blue' || 'change_green', payload: 15 || -15}

    switch (action.type) {
        case 'change_red':
            // NEVER DO THIS: state.red = state.red - 15. Instead rebuild state object into new
            // object w/ changed value Make new object {Copy everything from old state,
            // Overwrite new red state prop} if(state.red + action.amount > 255 || state.red
            // + action.amount < 0) {     return state; // always return something, ERROR:
            // undefined is not an object } return {     ...state,     red: state.red +
            // action.amount }
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : {
                    ...state,
                    red : state.red + action.payload
                }

            case 'change_green' : return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : {
                    ...state,
                    green : state.green + action.payload
                }
            case 'change_blue' : return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : {
                    ...state,
                    blue : state.blue + action.payload
                }
            default : return state;
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
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({
                type: 'change_red',
                payload: -1 * COLOR_INCREMENT
            })}
                color="red"/>

            <ColorCounter
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({
                type: 'change_green',
                payload: -1 * COLOR_INCREMENT
            })}
                color="green"/>

            <ColorCounter
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({
                type: 'change_blue',
                payload: -1 * COLOR_INCREMENT
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