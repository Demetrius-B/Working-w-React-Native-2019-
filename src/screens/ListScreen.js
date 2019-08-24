import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'Demetrius'},
        {name: 'Ryan'},
        {name: 'Brandon'},
        {name: 'Tyler'},
        {name: 'Gary'},
        {name: 'Adue'},
    ]

    return <FlatList data={friends} />
}

const styles = StyleSheet.create({});

export default ListScreen;