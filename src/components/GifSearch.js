import React from 'react'

class GifSearch extends React.Component {
    state = {
        query: ''
    }

    handleInputText = (e) => {
        this.setState({query: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" id="query" value={this.state.query} onChange={this.handleInputText} />
                <button onClick={() => this.props.getGifs(this.state.query)} >Find Gifs</button>
            </div>
        )
    }
}

export default GifSearch;