import React from "react"
import { useReducer } from "react"
import { call } from "react-native-reanimated"
import jsonServer from "../api/jsonServer"
import createDataContext from "./createDataContext"

const blogReducer = (state, action) => {
    switch (action.type) {
        case "getAllPosts":
            return action.payload
        case "add":
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case "update":
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return blogPost
                }
            })
        case "delete":
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get("/blogposts")
        dispatch({ type: "getAllPosts", payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        // dispatch({ type: "add", payload: { title, content } })
        // callback()
        await jsonServer.post("/blogposts", { title: title, content: content })
        if (callback) {
            callback()
        }
    }
}

const updateBlogPost = (dispatch) => {
    return (id, title, content) => {
        dispatch({ type: "update", payload: { id, title, content } })
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: "delete", payload: id })
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost }, [])