import React from "react"



const DailyWords = (props) => {
    console.log(props)

    return (
        <div className="daily_words" >
            <h2>{props.name}</h2>
            <p className="daily_body">{props.body}</p>
        </div>
    )
}

export default DailyWords