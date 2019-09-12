import React, {useReducer} from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

// Set increment
// Create Reducer
// state = { counter: number}
// action = { type: 'change_counter', payload: 1 || -1}


const CounterScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, { counter: 0});

    return (
        <View>
            <Button
                title="Increase"
                onPress={() => {
                // Don't do this!
                // counter++;
                setCounter(counter + 1);
            }}></Button>
            <Button
                title="Decrease"
                onPress={() => {
                setCounter(counter - 1);
            }}></Button>
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
