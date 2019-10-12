import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      images: []

    }

  }
  componentDidMount(){
    var imageFetchURL = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3"
    this.fetchURLs(imageFetchURL)
    console.log(imageFetchURL)
  }
  fetchURLs(imageFetchURL) {
  //  let imageFetchURL = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g&limit=3"

    fetch(imageFetchURL)
      .then (resp=> resp.json())
      .then (resp=> this.setState({images: resp.data}))


  }
  handleSearch=(searchQuery)=> {
      var fetchURL1="http://api.giphy.com/v1/gifs/search?q="
      var fetchURL2="&api_key=dc6zaTOxFJmzC&rating=g&limit=3"
      let fetchURL3=fetchURL1+searchQuery.toUpperCase()+ fetchURL2
    //  debugger;
      console.log(fetchURL3)
      this.fetchURLs(fetchURL3)
      console.log(this.state.images)

  }
  render() {
    //console.log(this.state.images);
    return (<div>
        <GifList images={(this.state.images)}/>

        < GifSearch handleSearch={this.handleSearch} />

      </div>)
    }
  }
export default GifListContainer
