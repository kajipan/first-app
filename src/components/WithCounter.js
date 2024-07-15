import React, { Component } from "react";

const WithCounter = WrappedComponent => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
      
          incrementCount = () => {
              this.setState(prevstate => {
                  return { count: prevstate.count + 1}
              })
          }

        render() {
            return ( 
            <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount} 
            />
            )
        }
    }
    return WithCounter
}

export default WithCounter