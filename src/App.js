import React, { Component } from "react"
import Header from "./Header"
import CounterList from './CounterList'

class App extends Component {
  state = {
    counter: 0
  }
  addCounter = () => {
    let counter = this.state.counter + 1
    this.setState({
      counter
    })
  }
  removeCounter = () => {
    if (this.state.counter !== 0){
      let counter = this.state.counter -1
      this.setState({
        counter
      })
    }
  }

  render() {
    return (
      <div className="App">
    <Header addCounter={this.addCounter} removeCounter={this.removeCounter}/>
    <CounterList counter={this.state.counter} />
      </div>
    );
  }
}

export default App