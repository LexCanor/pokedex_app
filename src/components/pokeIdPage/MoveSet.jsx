import React from 'react'
import './styles/moveSet.css'

const MoveSet = ({pokeData}) => {
    console.log(pokeData)
  return (
    <div className='moveContainer'>
        <h2>Movements</h2>

        <div className='movementWrapper'>
        {
            pokeData?.moves.map(move => (
                <span key={move.move.url} className='movement'>{move.move.name}</span>
            ))
        }
        </div>
    </div>
  )
}

export default MoveSet