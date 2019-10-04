import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        this.filterGifs('')
    }

    filterGifs = (query) => {
        let url = 'http://api.giphy.com/v1/gifs/search?q=' + query +'&api_key=dc6zaTOxFJmzC&rating=g'
        
        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                gifs: json.data.map(gif => gif.images.original.url)
            })
        })
    }

    render() {
        return(
            <div>
                <GifSearch filterGifs={this.filterGifs} />
                <br />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}