import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ComponentScreen =  () => {
    return <Text style={styles.textStyle}>This is the components screen.</Text>
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 30
    }
})

export default ComponentScreen;