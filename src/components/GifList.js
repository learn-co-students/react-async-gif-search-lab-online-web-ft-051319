import React, { Component } from 'react';

export default class GifList extends Component {

    listGifs = () => {
        return this.props.gifs.map(gif => <li><img src={gif} /></li>)
    }

    render() {
        return(
            <ul>
                {this.listGifs()}
            </ul>
        )
    }
}