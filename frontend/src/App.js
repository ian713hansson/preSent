import './App.css';
import { Route, Routes } from 'react-router-dom'
import Posts from './pages/Posts';
import Home from './pages/Home'
import Header from './components/Header';
import Creator from './pages/Creator';
import NewPost from './pages/NewPost';


function App() {
  return (
    <div>
      <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts />} />
        <Route path='/creators' element={<Creator />} />
        <Route path='/newpost' element={<NewPost />} />
      </Routes>
    </main>
    </div>
  )
}




export default App;
