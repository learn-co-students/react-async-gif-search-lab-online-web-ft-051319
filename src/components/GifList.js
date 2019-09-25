import React, { Component } from 'react';

export default class GifList extends Component {
    
    render() {
        let gifCards = this.props.gifs.map((card) => {
                return <li key={card.id}><img src={card.images.original.url} alt=""/></li>
            })
        

        return (
            <ul>{gifCards}</ul>
        )
    }

}