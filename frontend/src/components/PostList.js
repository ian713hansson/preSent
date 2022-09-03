import React from "react"

function PostList(props) {
    return (
        <div>
            {props.post && props.post.map((post)=>{
               return(
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    <h3>{post.file}</h3>
                </div>
               ) 
               })}
        </div>
    )
}

export default PostList