import React, { Component } from 'react';
import Box from "./Box";
import "./BoxContainer.css"

class BoxContainer extends Component{
    static defaultProps = {
        numBoxes:20,
        allColors: [
            "#fbf8cc", 
            "#fde4cf", 
            "#ffcfd2", 
            "#f1c0e8", 
            "#cfbaf0",
            "#a3c4f3",
            "#90dbf4",
            "#8eecf5",
            "#98f5e1",
            "#b9fbc0"
        ]
    }

    render(){
            const boxes = Array.from({length: this.props.numBoxes})
            .map(()=> <Box colors={this.props.allColors}/>
            ) 

        return(
            <div className='BoxContainer'>{boxes}</div>
        )
    }
}

export default BoxContainer;