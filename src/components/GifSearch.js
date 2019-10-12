import React from 'react'
//
// const GifSearch = (props) => {

class GifSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      searchQuery: "",
      value:""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.searchQuery !== "")
      {
        this.props.handleSearch(this.state.searchQuery)
      }

    this.setState({searchQuery: ""})
  }
  handleChange = event => {
    this.setState({searchQuery: event.target.value})
  }

  render() {

    return (
      <div>
      <p>Enter a search term:</p>
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.searchQuery} name="searchQuery" onChange={this.handleChange} />


        <button type="submit">Find GIFs</button>

      </form>
      </div>
      )
    }
}

export default GifSearch
