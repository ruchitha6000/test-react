import React from 'react'

function Fruit({name, price}) {
  return (
    <li>{price>200 ? <h3>the price of {name} is {price}</h3> : "" }</li>
  )
}

export default Fruit
