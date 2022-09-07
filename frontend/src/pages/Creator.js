import CreatorList from '../components/CreatorList'
import {useState, useEffect} from 'react'
import axios from 'axios'

function Creators () {
    const [creator, setCreators] = useState([])

    useEffect(()=>{
        const getCreators = async () => {
          let res = await axios.get('http://localhost:8000/api/creator/')
          console.log(res.data)
          setCreators(res.data)
        }
        getCreators()
      }, []) 

      return (
        <div className="App">
          <h1>Our Creators</h1>
          <section className='creator_grid'>
            {creator.map((creator)=>(
                <div>
                    <CreatorList 
                        key={creator.name}
                        id={creator.id}
                        name={creator.name}
                        about={creator.about}
                        location={creator.location}
                        profile_pic={creator.profile_pic}
                        />
                </div>
            ))}
          </section>
          
        </div>
      );
    }

export default Creators