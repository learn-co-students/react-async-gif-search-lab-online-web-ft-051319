import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    state = {
        gifData: []
    }

    componentDidMount(){
        this.fetchGifs()
    }


    fetchGifs(input="dog"){
        fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(data => {
            let firstThree = data.data.slice(0, 3)
            // console.log(firstThree, "gif data")
            this.setState({
            gifData: firstThree
            })
         }
        )
    }
    handleSubmit = (input) => {
        this.fetchGifs(input)
    }

    render(){
        return(
            <div>
           <GifList gifProp={this.state.gifData} />
           <GifSearch handleSubmit={this.handleSubmit}/>
           </div>
        )
    }
}