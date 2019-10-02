import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {

    state = { 
      search: "",
      gifs: [] 
    };

    handleSubmit = (input) => {
        this.setState({search: input})
        this.fetchGifs()

    }

    fetchGifs = () => {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(data => this.setState({
        gifs: data.data
      }))
    }
        

    componentDidMount() {
      this.fetchGifs()
    }


    render() {
      return( 
        <div>
          <GifList gifs={this.state.gifs} />
          <GifSearch handleSubmit={this.handleSubmit}/>
        </div>
      )

    }
  }