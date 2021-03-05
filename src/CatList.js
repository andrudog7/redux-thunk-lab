// write your CatList component here
import React from 'react' 

export default class CatList extends React.Component {
    render() {
        const catImage = this.props.catPics.map(cat => <img src={cat}></img>)
        return(
           <div>
               {catImage}
           </div> 
        )
    }
}