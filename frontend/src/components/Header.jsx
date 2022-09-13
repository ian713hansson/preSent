import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='header_container'>
        <div className='header'>
            <img className='logo' src='https://i.imgur.com/lhjDisq.png' />
            
            <div className='header_img_container'>
              <img className='header_img' src='https://i.imgur.com/25pHtQy.png' />
            </div>
            </div>
        <div className='nav_header'>
            <nav>
                <Link className='nav_links' to="/">Home</Link>
                <Link className='nav_links' to="/posts">Posts</Link>
                <Link className='nav_links' to="/creators">About Us</Link>
                <Link className='nav_links' to="/newpost">New Post</Link>
            </nav>
        </div>  
          
      
    </header>
  )
}

export default Header