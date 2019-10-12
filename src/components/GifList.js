import React from 'react'

const GifList = (props) => {

  return (

    props.images.map((imgElem,idx) =>{
      return (<li id={idx}><img src={imgElem.images.original.url} /></li>)
      }
    ) 
  )






}

export default GifList
