import React from 'react'

class GifSearch extends React.Component {
    state = {
        search: ''
    }

    handleInputText = (e) => {
        this.setState({search: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" id="search" value={this.state.search} onChange={this.handleInputText} />
                <button onClick={() => this.props.handleSubmit(this.state.search)} >Find Gifs</button>
            </div>
        )
    }
}

export default GifSearch;