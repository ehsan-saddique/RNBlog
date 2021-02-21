import React from "react"

const BlogContext = React.createContext()

export const BlogProvider = ({ childern }) => {
    return <BlogContext.Provider>
        {childern}
    </BlogContext.Provider>
}