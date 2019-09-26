import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component{
    state = { imageURLs: [] };

    handleSearch = (event, search) => {
        event.preventDefault();

        console.log("handleSearch is called with value: " + search);

        fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(dataArray => {
            let images = dataArray["data"].map(item => item.images.original.url);
            console.log("search imageURLs: " + images);
            this.setState({ imageURLs: images });
        })
    }

    componentDidMount(){
        fetch(`http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(dataArray => {
            let images = dataArray["data"].map(item => item.images.original.url);
            this.setState({ imageURLs: images.slice(0, 3) });
        })
    }

    render(){
        return (
            <div>
                <GifSearch handleSearch={this.handleSearch} />
                <GifList imageURLs={this.state.imageURLs} />
            </div>
        )
    }
}

export default GifListContainer