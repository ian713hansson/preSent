import React, { useState } from "react"
import axios from "axios"
import ReactAudioPlayer from 'react-audio-player'



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

    const deletePost = async (id) => {
        console.log('hello', props.id, props.title)
        await axios.delete(`http://localhost:8000/api/post/${props.id}`)
        
        console.log('post deleted')
        
    }

    return (
        <div className="post_list" onClick={(props.onClick)}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img className="post_img" src = {props.image}/>
            {/* <h4>Posted by: {props.creator}</h4> */}
            {/* <ReactAudioPlayer
            src={props.file}
            controls
            /> */}
            <iframe width="75%" height="120" src={props.file} frameborder="0" ></iframe>
            <button onClick={()=>deletePost(props.id, window.location.reload())}>Delete</button>
            
            {props.comment.map(comment => 
            <h5 className="post_comment">{comment.title}:  {comment.body} -{comment.user}</h5>
            )}
            
            <div >
            <form className='comment_form' onSubmit={handleComment}>
                <label htmlFor='comment'>Tell us your thoughts</label>
                <textarea id='comment' cols='40' rows='5'onChange={handleChange} value={formState.comment}></textarea>
                <button className="comment_btn" type='comment'>Leave a Comment</button>
            </form>
        </div>

        </div>
    )
}

export default PostList