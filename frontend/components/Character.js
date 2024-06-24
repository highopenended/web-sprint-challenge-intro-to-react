import React, { useState } from 'react'


function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const person=props.person
  const planetName=props.planetName

  const [worldIsRendered, setWorldIsRendered]=useState(false)


  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card' onClick={()=>setWorldIsRendered(!worldIsRendered)}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{person.name}</h3>
      {
        worldIsRendered 
        ? <p>Planet: {<span className='character-planet'>{planetName.name}</span>}</p>
        : null}
    </div>
  )
}
export default Character
