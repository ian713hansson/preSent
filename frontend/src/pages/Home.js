import React from "react"
import {useState, useEffect} from 'react'
import axios from 'axios'
import DailyWords from "../components/Daily"


const Home = () => {

    const [daily_words, setDailyWords] = useState([])

    useEffect(()=>{
        const getDailyWords = async () => {
            let res = await axios.get('http://localhost:8000/api/daily_words/')
            console.log(res.data)
            setDailyWords(res.data)
        }
        getDailyWords()
        }, []) 

        
        
    return (
        <div className="home">
            <h1>A Cyber Sangha</h1>
            <p>Inside you will find an ever expanding universe full of tools to help you manifest peaceful awareness.</p>
            <br></br>
            <section className="daily_words_grid">
                {daily_words.map((daily_words)=>(
                <div>
                    <DailyWords 
                        key={daily_words.name}
                        name={daily_words.name}
                        body={daily_words.body}
                    />
                    
                </div>
                ))}
            </section>
        </div>
    )
}

export default Home