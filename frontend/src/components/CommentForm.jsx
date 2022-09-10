import axios from "axios";
import React, { useState } from 'react'

function Comment () {
    const initialState = 
    { 
        title: '', 
        body: '',
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formState)
        let res = await axios.post('http://localhost:8000/api/comment/', formState)
        console.log(res)
        setFormState(initialState)
    }

    return(
        <div className="new_comment">
            <form className="comment_form" onSubmit={handleSubmit}>
                <h3>Comment on this post</h3>
                <label htmlFor="title">Title</label>
                    <input type="text" id='title'  value={formState.title} 
                    onChange={handleChange} />
                <label htmlFor="body">Tell us your thoughts</label>
                    <input type="text" id='body' value={formState.body} onChange={handleChange} />
                <button type="submit" >New Comment</button>
            </form>
        </div>
    )
}

export default Comment