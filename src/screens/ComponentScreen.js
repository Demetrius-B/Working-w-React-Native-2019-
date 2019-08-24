import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentScreen = () => {

    const greeting = <Text>Howdy, Partner!</Text>
    const name = "Demetrius"

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen.</Text>
            {greeting}

            <Text style={{fontSize:45}}>Getting started with React Native!</Text>
            <Text style={{fontSize:20}}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 31
    }
})

export default ComponentScreen;