import React, { useState } from "react"


const CreatorList = (props) => {
    console.log(props)

    return (
        <div className="post_list" onClick={(props.onClick)}>
            <h2>{props.name}</h2>
            <p>{props.about}</p>
            <h3>{props.location}</h3>

        </div>
    )
}

export default CreatorList