import React from 'react'

function Animals() {
    let animals = ["Cat","Dog","Horse","Lion","Tiger"];
  return (
    <div>
      {
        animals.map((animal)=>(
            <li>{animal}</li>
        ))
      }
    </div>
  )
}

export default Animals
