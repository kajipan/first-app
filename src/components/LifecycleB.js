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
    
    shouldComponentUpdate() {
        console.log('LifecycleB this.shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('LifecycleB this.getSnapshotBeforeUpdate')
    }

    componentDidUpdate() {
        console.log('LifecycleB this.componentDidUpdate')
    }

  render() {
      console.log(Object)
    return  <div>Lifecycle B</div>
  }
}

export default LifecycleB