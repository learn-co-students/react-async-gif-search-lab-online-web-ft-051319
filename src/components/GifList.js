import React from 'react'

export default class GifList extends React.Component {

    
    render() {
      return (
        <div>
          <ul>
            {this.props.gifs.map(gif => {
              return <li><img src={gif.images.original.url} alt= "" /></li>
            })}
          </ul>
        </div>
      )
    }
  }