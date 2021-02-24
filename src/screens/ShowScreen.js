import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from "react-native"
import { Context } from '../context/BlogContext'
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = (props) => {
    const id = props.navigation.getParam("id")
    const { state } = useContext(Context)
    const blogPost = state.find((item) => item.id === id)

    return <View>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
    </View>

}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam("id") })}>
                <EvilIcons name="pencil" size={35} style={{ marginRight: 12 }} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 12,
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
        marginLeft: 8,
        marginRight: 10
    }
})

export default ShowScreen