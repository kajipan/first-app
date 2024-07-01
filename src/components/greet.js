import React from "react"

const Greet = props => {
  const {name, heroName} = props
  return (
    <div>
        <h1>
            hello {name} a.k.a {heroName}
        </h1>
    </div>
  )
}

export default Greet