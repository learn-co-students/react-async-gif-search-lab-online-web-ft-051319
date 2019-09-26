import React, { PureComponent } from 'react';

class GifList extends PureComponent {

// <GifList /> is a presentational component. It receives data from its props and renders html given the input data. It can render a top level <ul> with each gif as an <li>.

    render (props) {
      return (
        <ul>
            {this.props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
        </ul>
      )
    }

}

export default GifList
