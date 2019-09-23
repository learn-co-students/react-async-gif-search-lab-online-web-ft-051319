import React, {Component} from 'react';

export default class GifSearch extends Component{

  constructor(props){
    super(props)

    this.state={
      query: null,
      value: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.onQuerySubmit(this.state.value)
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  render(){
    return(
      <form className='queryForm' onSubmit={this.handleSubmit}>
        Enter Search Term: <input type="text" id='animal' onChange={this.handleChange} value={this.state.value}/>
        <input type="submit" value="Find GIF" />
      </form>
    )
  }

}
