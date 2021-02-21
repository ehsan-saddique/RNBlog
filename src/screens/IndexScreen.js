import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Text, StyleSheet, View, Button } from "react-native"
import { FlatList } from 'react-native-gesture-handler'
import BlogContext from '../context/BlogContext'

const IndexScreen = (props) => {
    const { data, addBlogPost } = useContext(BlogContext)

    return <View>
        <Text>Index screen</Text>
        <Button
            title="Add Post"
            onPress={addBlogPost}
        />

        <FlatList
            data={data}
            keyExtractor={(blog) => blog.title}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>
            }}
        />
    </View>

}

const styles = StyleSheet.create({})

export default IndexScreen