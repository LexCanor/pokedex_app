import React from 'react'
import './styles/pokeHeader.css'

const PokeHeader = () => {
  return (
    <div className='headerBar'>
        <img src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="" />
        <div className='headerDot'>
            <div className='headerDot2'></div>
        </div>
    </div>
  )
}

export default PokeHeader