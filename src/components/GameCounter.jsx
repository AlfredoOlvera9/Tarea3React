import React from 'react'


const GameCounter = (props) => {
  return (

    <React.Fragment>
    { 
      (props.completed === props.total) ? 

      <h2 className='GameCounter'>

       Felicidades has completado todos tus juegos
    
     </h2> :

     <h2 className='GameCounter'>

     Has completado <span> {props.completed}</span> de <span> {props.total}</span> juegos
    </h2>      
    }
    </React.Fragment>
  )
}

export default GameCounter