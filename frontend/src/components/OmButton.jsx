const OmButton = (props) => {
    return (
        <div className="buttons">
            <img src='https://static.displate.com/280x392/displate/2022-03-20/6fdd134c7f0d7fa51c6f7b874f273581_de0643140d62c16854094fe2de76e0e7.jpg' onClick={() => props.addOM()} className="om"/>
        </div>
        )
    }
    
    export default OmButton