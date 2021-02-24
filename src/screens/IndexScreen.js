import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Text, StyleSheet, View, Button } from "react-native"
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'
import { Feather } from "@expo/vector-icons";

const IndexScreen = (props) => {
    const { state, deleteBlogPost } = useContext(Context)

    return <View>

        <FlatList
            data={state}
            keyExtractor={(blog) => blog.title}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => props.navigation.navigate("Show", { id: item.id })}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>

                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>

}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} style={{ marginRight: 12 }} />
            </TouchableOpacity>
        ),
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
        marginLeft: 12
    },
    icon: {
        fontSize: 24,
        marginRight: 12
    }
})

export default IndexScreen