import React, { useState } from "react"
import axios from "axios"

const PostList = (props) => {
    console.log(props)

    const [formState, setFormState] = useState('')

    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]:
        event.target.value })
    }
    const handleComment = async (event) => {
        event.preventDefault()
        console.log(formState)
        try{
            let res = await axios.put(`http://localhost:8000/api/post/${props.id}`, formState)
            console.log(res)
            setFormState('')
            window.location.reload()
        }
        catch (error){
            throw error
        }
    }

    return (
        <div className="post_list" onClick={(props.onClick)}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src = {props.image}/>
            <h4>Posted by: {props.creator}</h4>
            {props.comment.map(comment => 
            <h5 className="post_comment">{comment.title}: {comment.body}-{comment.user}</h5>
            )}
            
            <div className='review-form'>
            <form onSubmit={handleComment}>
                <label htmlFor='review'>Tell us your thoughts</label>
                <textarea id='review' cols='40' rows='5'onChange={handleChange} value={formState.comment}></textarea>
                <button type='review'>Leave a Comment</button>
            </form>
        </div>

        </div>
    )
}

export default PostList