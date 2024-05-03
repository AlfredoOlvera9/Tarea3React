import React from 'react'

const GameSearch = (props) => {
  return (
    <input 
          className="GameSearch" 
           placeholder='Halo 3' 
           value={props.searchValue}
           onChange={ ( event ) => {
            props.setSearchValue(event.target.value)
            
           }}
           />
  )
}

export default GameSearch