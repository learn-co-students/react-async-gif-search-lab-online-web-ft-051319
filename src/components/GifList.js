import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

const GifList = props => {
    return(
        <div>
            {props.gifs.map((gif, index) => <img key={index} src={gif.url} alt="gif" />)}
        </div>
    )
}

export default GifList