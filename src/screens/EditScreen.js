import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Text, StyleSheet, View, Button } from "react-native"
import { TextInput } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = (props) => {
    const id = props.navigation.getParam("id")
    const { state, updateBlogPost } = useContext(Context)
    const blogPost = state.find((item) => item.id === id)

    return <View>
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                updateBlogPost(id, title, content, () => {
                    props.navigation.pop()
                })
            }} />
    </View>

}

const styles = StyleSheet.create({})

export default EditScreen