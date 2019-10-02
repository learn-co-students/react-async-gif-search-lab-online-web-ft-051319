import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        this.getGifs();
    }

    getGifs = (query = '') => {
        let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
        // Can also limit to first 3 in url
        // `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`

        fetch(url)
            .then(r => r.json())
            .then(json => this.setState({gifs: json.data.slice(0,3)}))
    }

    render() {
        return (
            <div>
                <GifSearch getGifs={this.getGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;