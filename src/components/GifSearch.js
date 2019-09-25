import React, { Component } from 'react';

export default class GifSearch extends Component {

    state = {
        value: '',
    }
    
    handleChange = (event) => {
        this.setState({
          value: event.target.value,
        });
      }
      
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchNewGifs(event.target.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit">Search</button>
          </form>
        )
    }

}