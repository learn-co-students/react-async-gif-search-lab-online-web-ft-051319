import React, { Component } from 'react';

export default class GifSearch extends Component {
    state = {
        search: ''
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    handleClick = () => {
        this.props.filterGifs(this.state.search)
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} type="text" value={this.state.search}></input>
                <input onClick={this.handleClick} type="submit" />
            </div>
        )
    }
}