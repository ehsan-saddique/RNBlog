import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Text, StyleSheet, View, Button } from "react-native"
import { TextInput } from 'react-native-gesture-handler'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const CreateScreen = (props) => {
    const { addBlogPost } = useContext(Context)

    return <View>
        <BlogPostForm onSubmit={(title, content) => {
            addBlogPost(title, content)
            props.navigation.pop()
        }} />
    </View>

}

const styles = StyleSheet.create({})

export default CreateScreen