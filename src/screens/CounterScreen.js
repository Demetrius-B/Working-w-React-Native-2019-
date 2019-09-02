import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const CounterScreen = (props) => {

    // broken code. todo: fix
    let counter = 0;

    return(
        <View>
            <Button title="Increase" onPress={() => {counter++; console.log(counter)}}></Button>
            <Button title="Decrease" onPress={() => {counter--; console.log(counter)}}></Button>
            <Text style={styles.textStyle}>Counter Count:</Text>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 31
    }
})

export default CounterScreen;

