import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'kaji'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleB this.getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleB this.componentDidMount')
    }


  render() {
      console.log(Object)
    return  <div>Lifecycle B</div>
  }
}

export default LifecycleB