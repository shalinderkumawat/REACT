import React from 'react'

const Home = (props) => {
  return (
    <div>
    i am Home
    {/* this is props  */}
    <p>this is propes {props.brand.name}</p>
    </div>
  )
}

export default Home