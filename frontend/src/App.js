import './App.css';
import PostList from './components/PostList'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [post, setPosts] = useState([])
  useEffect(()=>{
    const getPosts = async () => {
      const res = await axios.get('http://localhost:8000/post/')
      console.log(res.data.post)
      setPosts(res.data.post)
      console.log(post)
    }
    getPosts()
  }, []) 


  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
