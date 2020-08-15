import React, { Component } from "react"

class Counter extends Component {
    state = {
      count: 0
    }	
        
increaseCount = () => {
    let count = this.state.count + 1
        
    this.setState({
            count
      })
 }
        
 decreaseCount = () => {
    let count = this.state.count - 1
        
    this.setState({
        count
    })
}      
  render() {
    return (
      <div className="Counter">
        <h4>Counter :{this.state.counter}</h4>
        <button onClick={this.props.decreaseCount}>Decrement</button>
        <button onClick={this.props.increaseCount}>Increment</button>
      </div>
    );
  }
}

export default Counter