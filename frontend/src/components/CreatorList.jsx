import React, { useState } from "react"


const CreatorList = (props) => {
    console.log(props)

    return (
        <div className="creator_list" onClick={(props.onClick)}>
            <img className="profile_pic" src={props.profile_pic}/>
            <h2>{props.name}</h2>
            <p className="creator_about">{props.about}</p>
            <h3>{props.location}</h3>

        </div>
    )
}

export default CreatorList