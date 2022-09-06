import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
        <div className='header'>
            <h1>preSent</h1>
            <h4>A Cyber Sangha for inhabitants of the fringe</h4>
        </div>
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </header>
  )
}

export default Header