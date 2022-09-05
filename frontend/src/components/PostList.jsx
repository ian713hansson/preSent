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
            <h3>{props.file}</h3>
            <div className='review-form'>
            <form onSubmit={handleComment}>
                <label htmlFor='review'>Tell us your thoughts</label>
                <textarea id='review' cols='80' rows='10'onChange={handleChange} value={formState.review}></textarea>
                <button type='review'>Review</button>
            </form>
        </div>

        </div>
    )
}

export default PostList