import React, {useReducer} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

// Set increment - done
// Create Reducer - done
// state = { counter: number}
// action = { type: 'change_counter', payload: 1 || -1}

const reducer = (state, action) => {
    if (action.type === 'change_counter') {
        return {...state, counter: state.counter + action.payload}
    } else {
        return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => dispatch({type:'change_counter', payload: 1})}></Button>
            <Button
                title="Decrease"
                onPress={() => dispatch({type:'change_counter', payload: -1 * 1})}></Button>
            <Text style={styles.textStyle}>Counter Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 31
    }
})

export default CounterScreen;
