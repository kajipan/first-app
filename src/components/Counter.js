import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0 
      }
    }
    incrment() {
        this.setState(
            {
            count: this.state.count + 1
        },
        () => {
            console.log('callback value',this.state.count)
        }
    )

    this.setState((prevState, props) => ({
        count: prevState.count + 1
    }))
        console.log(this.state.count)
    }

    incrmentFive() {
        this.incrment()
        this.incrment()
        this.incrment()
        this.incrment()
        this.incrment()
    }
    

  render() {
    return (
        <div>
          <div>count - {this.state.count}</div> 
          <button onClick={() => this.incrmentFive()}>Increment</button> 
        </div>
    ) 
  }
}

export default Counter


