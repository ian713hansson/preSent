import './App.css';
import { Route, Routes } from 'react-router-dom'
import Posts from './pages/Posts';
import Home from './pages/Home'
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </main>
    </div>
  )
}




export default App;
