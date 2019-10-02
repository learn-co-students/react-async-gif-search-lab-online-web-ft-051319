import React from 'react'

class GifList extends React.Component {
    render() {        
        return (
            <div>
                <ul>
                    {this.props.gifs.map(g => <li key={g.id}><img src={g.images.original.url} alt={g.title} /></li>)}
                </ul>
            </div>
        )
    }
}

// or use fn instead
// const GifList = props => {
//     return (
//         <div>
//             <ul>
//                 {props.gifs.map(g => <li key={g.id}><img src={g.images.original.url} alt={g.title} /></li>)}
//             </ul>
//         </div>
//     )
// }

export default GifList;