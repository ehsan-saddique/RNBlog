import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Text, StyleSheet, View, Button } from "react-native"
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'
import { Feather } from "@expo/vector-icons";

const IndexScreen = (props) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)

    return <View>
        <Button
            title="Add Post"
            onPress={addBlogPost}
        />

        <FlatList
            data={state}
            keyExtractor={(blog) => blog.title}
            renderItem={({ item }) => {
                return <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>

                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather style={styles.icon} name="trash" />
                    </TouchableOpacity>
                </View>
            }}
        />
    </View>

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