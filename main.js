import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import Button from './components/IncrementButton';


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter:0,
  
        }
        this.counterIncrement = this.counterIncrement.bind(this)
    }

    counterIncrement(){

        this.setState({counter:this.state.counter+1})
    }

    render() {
        return(
            <div>
            <p>COUNTER: {this.state.counter}</p>
            <Button counterIncrement = {this.counterIncrement}/>
            </div>
        )
    }
}



ReactDOM.render( <App />, document.getElementById('root'));

