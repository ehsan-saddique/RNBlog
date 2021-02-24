import React from "react"
import { useReducer } from "react"
import createDataContext from "./createDataContext"

const blogReducer = (state, action) => {
    switch (action.type) {
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

const addBlogPost = (dispatch) => {
    return (title, content) => {
        dispatch({ type: "add", payload: { title, content } })
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

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, updateBlogPost, deleteBlogPost }, [{ id: 1, title: "Test Blog", content: "Test Content" }])