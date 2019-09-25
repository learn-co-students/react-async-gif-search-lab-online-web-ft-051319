import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';



export default class GifListContainer extends Component {
    constructor() {
        super()
        
        this.state = {
            gifs: [],
            // url: 'http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'
        }
    }

    componentDidMount() {
        const URL = 'http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'
        // fetch(this.state.url)
        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.setState({
            gifs: json['data'].slice(0, 3)
        }));
    };

    fetchNewGifs = (gifText) => {
        // grab the changing portion of the query string
        // let replace = this.state.url.match(/(?<==)(.*?)(?=&)/)[0];
        let url = `http://api.giphy.com/v1/gifs/search?q=${gifText}&api_key=dc6zaTOxFJmzC&rating=g`

        fetch(url)
        .then(resp => resp.json())
        .then(json => this.setState({
            gifs: json['data'].slice(0, 3)
        }));
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchNewGifs={this.fetchNewGifs}/>
            </div>  
        )
    }

};