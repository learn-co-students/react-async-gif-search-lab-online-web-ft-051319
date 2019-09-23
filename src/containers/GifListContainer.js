import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component{
  constructor(){
    super()
    this.state={
      gifs: []
    }
  }

  onQuerySubmit = (query) => {
      console.log(this.state)
      let url=`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
      fetch(url)
      .then(resp=>resp.json())
      // .then(json=>console.log(json.data.slice(0,3)))
      .then(json=>this.setState({gifs: json.data.slice(0,3)}))
  }
  // componentDidMount(){
  //   console.log(this.state)
  //   let url=`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`
  //   fetch(url)
  //   .then(resp=>resp.json())
  //   // .then(json=>console.log(json.data.slice(0,3)))
  //   .then(json=>this.setState({gifs: json.data.slice(0,3)}))
  // }

  updateQuery = (q) => {
    this.setState({query: q})
  }


  render(){
    return(
      <div className='gif-container'>
        <GifSearch updateQuery={this.updateQuery} onQuerySubmit={this.onQuerySubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}
