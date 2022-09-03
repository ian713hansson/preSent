import React from "react"

function PostList(props) {
    return (
        <div>
            {props.posts && props.posts.map((posts)=>{
               return(
                <div>
                    <h1>{posts.title}</h1>
                    <p>{posts.description}</p>
                    <h3>{posts.file}</h3>
                </div>
               ) 
               })}
        </div>
    )
}

export default PostList