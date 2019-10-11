import React from 'react'
import GifList from '../components/GifList.js'

class GifListContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      images: []

    }

  }
  componentDidMount(){
    this.fetchURLs()
  }
  fetchURLs() {
    let imageFetchURL = "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"

    fetch(imageFetchURL)
      .then (resp=> resp.json())
      .then (resp=> this.setState({images: resp.data}))

  }
render() {
  //console.log(this.state.images);
  return (<div>
    <GifList images={this.state.images}/>
    </div>)
  }
}
export default GifListContainer
