import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>1</Text>
        <Text style={styles.textTwoStyle}>2</Text>
        <Text style={styles.textThreeStyle}>3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        height: 50,
        width: 50
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'green',
        height: 50,
        width: 50,
        top: 50
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'blue',
        height: 50,
        width: 50
    }
})

export default BoxScreen;
