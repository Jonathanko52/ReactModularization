import React from 'react';
import { Component } from 'react';


class Button extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log("PROPS", this.props)
    }
    render() {
        return(
            <button onClick={this.props.counterIncrement}>
                increment counter
            </button>
        )
    }
}

export default Button;




