import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'Demetrius', key:'1'},
        {name: 'Ryan', key:'2'},
        {name: 'Brandon', key:'3'},
        {name: 'Tyler', key:'4'},
        {name: 'Gary', key:'5'},
        {name: 'Adue', key:'6'},
    ]

    return (
        <FlatList 
            data={friends} 
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }} 
        />
    )
}

const styles = StyleSheet.create({});

export default ListScreen;