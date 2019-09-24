import React from 'react'

const GifList = props => {
    let images = props.gifProp.map((gifObj, id) => <img alt="gifUrl" key={id} src={gifObj.images.original.url}></img>)
    
    return(
        <ul>
            <li>{images}</li>
        </ul>
    )}


export default GifList