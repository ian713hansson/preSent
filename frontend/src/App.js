import './App.css';
import PostList from './components/PostList'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const getPosts = async () => {
      const res = await axios.get('http://localhost:8000/post/')
      console.log(res.data.posts)
      setPosts(res.data.posts)
      console.log(posts)
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
