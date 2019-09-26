import React from 'react'

class GifList extends React.Component {
    render(){
        return <ul>{
            this.props.imageURLs.map(url => <li><img src={url} alt=''/></li>)
        }</ul>
    }
}

export default GifList