import './App.css';
import PostList from './components/PostList'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [post, setPosts] = useState([])

  useEffect(()=>{
    const getPosts = async () => {
      let res = await axios.get('http://localhost:8000/api/post/')

      console.log(res.data)
      console.log('this works?')
      setPosts(res.data)
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
