import React from 'react'

export default class GifSearch extends React.Component {
    
    state = { searchTerm: " " };
    
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.handleSubmit(this.state.searchTerm)
      event.target.reset()
    }


    
    render(){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" name="searchTerm" placeholder="Search"></input>
            <input type="submit" name="Submit"></input>
          </form>
        </div>
      );
    }
}