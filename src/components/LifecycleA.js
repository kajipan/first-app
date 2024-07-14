import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'kaji'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleA this.getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleA this.componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA this.shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('LifecycleA this.getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA this.componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'codevolution'
        })
    }


  render() {
      console.log(Object)
    return(<div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
    </div>)  
  }
}

export default LifecycleA