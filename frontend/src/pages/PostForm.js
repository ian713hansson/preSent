import axios from "axios";
import React, { useState } from 'react'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

function NewPost () {
    const initialState = 
    { 
        title: '', 
        image: '', 
        file: '', 
        description: ''
    }

    const [formState, setFormState] = useState(initialState)

    
    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    // const handleImageChange = event => {
    //     setFormState({ ...formState, [event.target.files[0]]: event.target.value })
    // }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formState)
        let res = await axios.post('http://localhost:8000/api/post/create/', formState)
        console.log(res)
        setFormState(initialState)
    }


    return (
        <div className="new_post">
            <form className="post_form" onSubmit={handleSubmit}>
                <h3>New Post</h3>
                <label htmlFor="title">Title</label>
                    <input type="text" id='title'  value={formState.title} 
                    onChange={handleChange} />
                <label htmlFor="image">Upload Image File</label>
                    <input type="file" id='image' value={formState.image} onChange={handleChange} />
                <label htmlFor="audio">Upload Audio File</label>
                    <input type="file" id='file' value={formState.file} onChange={handleChange} />
                <label htmlFor="description">Describe your post</label>
                    <input id="description" value={formState.description} onChange={handleChange} />
                <button >New Post</button>
            </form>
        </div>
    )
}



export default NewPost