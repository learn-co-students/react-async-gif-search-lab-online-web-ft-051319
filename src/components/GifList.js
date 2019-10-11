import React from 'react'


class GifList extends React.Component {
    constructor() {
      super()
    }
    renderGifs = () => {

      var returnString = ""
      for (let i=0; i < 3; i++) {


        class GifList extends React.Component {
            constructor() {
              super()
            }
            renderGifs = () => {

              var returnString = ""
              for (let i=0; i < 3; i++) {

                console.log(this.props.images[i])
                returnString = returnString.concat (`<img src=${this.props.images[i]} />`)
              //  debugger;
              }

              console.log(returnString)
              return returnString
            }
            render() {
              return(<div>
                {this.renderGifs()}</div>)
            }
        }

      //  debugger;
      }

      console.log(returnString)
      return returnString
    }
    render() {
      return(<div>
        {this.renderGifs()}</div>)
    }
}

export default GifList
