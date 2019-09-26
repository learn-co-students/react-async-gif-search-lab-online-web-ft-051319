import React, { PureComponent } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends PureComponent {

    state = {
        animalGif: []
    }

// fetching the data from the giphy API & storing the first 3 gifs from the response in its component state
    fetchGIFs = (query = "dolphins") => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
          this.setState({ animalGif: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount() {
      this.fetchGIFs()
    }

// passing that data down to its child, the <GifList> component, as a prop
// render a <GifSearch /> component that renders the form and pass down a submit handler function to <GifSearch /> as a prop.
  render() {
    return (
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.animalGif} />
      </div>
    );
  }


}

export default GifListContainer
