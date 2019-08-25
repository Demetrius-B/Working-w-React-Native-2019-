import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button 
            onPress={() => props.navigation.navigate('List')}
            title="Go to Components Demo" />

        <TouchableOpacity onPress={() => console.log("list pressed!")}> 
            <Text>Go To List Demo</Text>
            <Text>Go To List Demo</Text>
            <Text>Go To List Demo</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
