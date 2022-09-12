import React, { useState } from "react"
import axios from "axios"
import Comment from './CommentForm'
import OmCounter from './OmCounter'
import OmButton from "./OmButton"


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

    const [oms, setOMS] = useState(0)

    const addOM = (event) => {
        let om = oms + 1
        setOMS(om)
        console.log('enlightened')
    }

    const postOM= async (id) => {
        console.log('om', props.id, props.title)
        await axios.put(`https://localhost:8000/api/post/${props.id}`)

        console.log('post enlightened')
    }

    
    return (
        <div className="post_list" onClick={(props.onClick)}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img className="post_img" src = {props.image}/>
            {/* <h4>Posted by: {props.creator}</h4> */}
            <div className="media_frame">
                <iframe width="560" height="315" src={props.file} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  ></iframe>
            </div>
            <button onClick={()=>deletePost(props.id, window.location.reload())}>Delete</button>
            
            
            <div className='user_field'>
                <div className="oms">
                    <h4>Give this post an OM</h4>
                    <OmButton addOM={addOM} />
                    <OmCounter digit={oms} onChange={()=>postOM(props.id)}/>
                </div>
                <div className="comment" >
                    <Comment className='comment_form' onSubmit={handleComment} onChange={handleChange} />   
                </div>
            </div>
        </div>
    )
}

export default PostList