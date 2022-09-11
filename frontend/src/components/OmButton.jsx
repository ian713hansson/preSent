const OmButton = (props) => {
    return (
        <div className="buttons">
            
            <img src='https://i.imgur.com/CQTFqbx.png' onClick={() => props.addOM()} className="om"/>
        </div>
        )
    }
    
    export default OmButton