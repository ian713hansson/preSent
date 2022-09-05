import PostList from '../components/PostList'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Posts () {
    const [post, setPosts] = useState([])

    useEffect(()=>{
        const getPosts = async () => {
          let res = await axios.get('http://localhost:8000/api/post/')
          console.log(res.data)
          setPosts(res.data)
        }
        getPosts()
      }, []) 

      return (
        <div className="App">
          <h1>posts here </h1>
          <section className='post_grid'>
            {post.map((post)=>(
                <div>
                    <PostList 
                        key={post.title}
                        id={post._id}
                        title={post.title}
                        description={post.description}
                        file={post.file}
                        comment={post.comment}
                        />
                </div>
            ))}
          </section>
          
        </div>
      );
    }

export default Posts