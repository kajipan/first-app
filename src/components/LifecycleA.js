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


  render() {
      console.log(Object)
    return(<div>
        <div>LifecycleA</div>
        <LifecycleB />
    </div>)  
  }
}

export default LifecycleA