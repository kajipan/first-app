import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
           }
        }
    
  render() {

    return this.state.isLoggedIn && <div>welcome kaji</div> 


    //return this.state.isLoggedIn ? (
    //    <div>welcome kaji</div>
    //)   : (
    //    <div>welcome Guest</div>
    //)

    //let message
    //if (this.state.isLoggedIn) {
    //    message = <div>welcome kaji</div>
    //} else {
    //    message = <div> welcome Guest</div>
    //}

    //return <div>{message}</div>

    //  if (this.state.isLoggedIn) {
    //    return<div>Welcome kaji</div>
    //} else {
    //    return<div>welcome Guest</div>
    //}
    //return (
    //    <div>
    //        <div>Welcome kaji</div>
    //        <div>Welcome Guest</div>
    //    </div>
    //)
  }
}

export default UserGreeting