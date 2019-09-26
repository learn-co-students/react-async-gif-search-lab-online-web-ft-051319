import React from 'react';

class GifSearch extends React.Component{
    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        }, () => console.log("GifSearch state: " + this.state.search))
    }

    render(){
        return (
            <form onSubmit={event => this.props.handleSearch(event, this.state.search)}>
                <input id='search' type='text' value={this.state.search} onChange={this.handleChange} />
                <input type='submit' value='search' />
            </form>
        )
    }
}

export default GifSearch