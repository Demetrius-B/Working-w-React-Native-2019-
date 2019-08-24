import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComponentScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen.</Text>
        </View>
    )
}

const styles = StyleSheet.create({ // CSS in React Native
    textStyle: {
        fontSize: 30
    }
})

export default ComponentScreen;