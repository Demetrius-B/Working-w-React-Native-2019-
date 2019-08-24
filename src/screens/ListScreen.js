import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    // Method #1 - Defining a key
    // const friends = [
    //     {name: 'Demetrius', key:'1'},
    //     {name: 'Ryan', key:'2'},
    //     {name: 'Brandon', key:'3'},
    //     {name: 'Tyler', key:'4'},
    //     {name: 'Gary', key:'5'},
    //     {name: 'Adue', key:'6'},
    // ]


    // Method #1 - Defining a key
    const friends = [
        {name: 'Demetrius'},
        {name: 'Ryan'},
        {name: 'Brandon'},
        {name: 'Tyler'},
        {name: 'Gary'},
        {name: 'Adue'},
    ]

    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
                return  <Text>{item.name}</Text>
            }} 
        />
    )
}

const styles = StyleSheet.create({});

export default ListScreen;