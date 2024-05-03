import React from 'react'

const GameList = (props) => {

  return (

    <ul className='GameList'>
      {props.children}
    </ul>
  )
}

export default GameList