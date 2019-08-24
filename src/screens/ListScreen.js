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
        {name: 'Demetrius'},
        {name: 'Ryan'},
        {name: 'Brandon'},
        {name: 'Tyler'},
        {name: 'Gary'},
        {name: 'Adue'},
    ]

    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {
                return  <Text style={styles.textStyle}>{item.name}</Text>
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