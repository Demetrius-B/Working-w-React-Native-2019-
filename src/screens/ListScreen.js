import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    // Method #1 - Defining a key: Add key property
    // const friends = [
    //     {name: 'Demetrius', key:'1'},
    //     {name: 'Ryan', key:'2'},
    //     {name: 'Brandon', key:'3'},
    //     {name: 'Tyler', key:'4'},
    //     {name: 'Gary', key:'5'},
    //     {name: 'Adue', key:'6'},
    // ]


    // Method #2 - Defining a key: use keyExtractor
    const friends = [
        {name: 'Demetrius', age:22},
        {name: 'Ryan', age:21},
        {name: 'Brandon', age:23},
        {name: 'Tyler', age:25},
        {name: 'Gary', age:19},
        {name: 'Adue', age:27},
    ]

    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
                return  <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }} 
        />
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;