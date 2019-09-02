import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const CounterScreen = (props) => {
    return(
        <View>
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

