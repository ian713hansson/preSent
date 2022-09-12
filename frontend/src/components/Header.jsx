import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
        <div className='header'>
            <h1>preSent</h1>
            <h4>A Cyber Sangha for inhabitants of the fringe</h4>
            <div className='header_img_container'>
              <img className='header_img' src='https://i.imgur.com/25pHtQy.png' />
            </div>
            
        <div className='nav_header'>
            <nav>
                <Link className='nav_links' to="/">Home</Link>
                <Link className='nav_links' to="/posts">Posts</Link>
                <Link className='nav_links' to="/creators">About Us</Link>
                <Link className='nav_links' to="/newpost">New Post</Link>
            </nav>
        </div>    
      </div>
    </header>
  )
}

export default Header