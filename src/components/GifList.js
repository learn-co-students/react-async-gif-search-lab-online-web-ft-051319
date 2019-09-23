import React, {Component} from 'react';

export default class GifList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul>
      {this.props.gifs.map((gif,index) => <li className='gifs' key={index}><img src={gif.images.original.url}></img></li>)}
      </ul>
    )
  }

}
