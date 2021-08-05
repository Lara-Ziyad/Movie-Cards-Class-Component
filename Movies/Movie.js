import React, { Component } from 'react';
import "./Movie.css"

class Movie extends Component {

    render() {
        const{click, index, changed, item,name }=this.props
        return (
            <div className="Movie">
            
            <p onClick={(event)=> click(event,index)} >{name}!</p>
            
            <input  type="text" onChange={(event)=>changed(event,item)} placeholder="Enter new Movie..." />
        </div>
            
        );
    }
}

export default Movie;