import React from 'react'


class GifList extends React.Component {
    constructor() {
      super()
    }
    renderGifs = () => {

      var returnString = ""
      let firstObj = this.props.images[0]

    //  console.log(firstObj)
    //  debugger
      for (let i=0; i < 3; i++) {
            //    console.log(this.props.images[i])
               returnString = returnString.concat (`<img src="${this.props.images[i]}"> </img>`)
              //  debugger;
              }

      //  debugger;

  //    console.log(returnString)
      return returnString

    }
    componentdidMount() {
      this.renderGifs()
    }
    render() {
      return(<p>
        {this.renderGifs()}</p>)
    }
}

export default GifList
