import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Text, StyleSheet, View, Button } from "react-native"
import { TextInput } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'

const BlogPostForm = (props) => {
    const [title, setTitle] = useState(props.initialValues.title)
    const [content, setContent] = useState(props.initialValues.content)

    return <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(newValue) => setTitle(newValue)} />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(newValue) => setContent(newValue)} />

        <Button
            title="Save"
            onPress={() => props.onSubmit(title, content)}
        />
    </View>

}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        margin: 5
    },
    label: {
        fontSize: 18,
        marginTop: 8,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogPostForm