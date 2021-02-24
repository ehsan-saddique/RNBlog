import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Text, StyleSheet, View, Button } from "react-native"
import { Context } from '../context/BlogContext'

const ShowScreen = (props) => {
    const id = props.navigation.getParam("id")
    const { state } = useContext(Context)
    const blogPost = state.find((item) => item.id === id)

    return <View>
        <Text style={styles.title}>{blogPost.title}</Text>
    </View>

}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        margin: 16
    }
})

export default ShowScreen