import React from 'react'
import './styles/atributes.css'

const Atributes = ({ pokeData }) => {
    //console.log(pokeData)

    return (
        <div className='aWrapper'>
            <div className='aContainer'>
                <h3>Type</h3>
                <ul className='aBoxer'>
                    {
                        pokeData?.types.map(type => (
                            <li key={type.slot} className={`aBox b${type.type.name}`} >{type.type.name}</li>
                        ))
                    }
                </ul>
            </div>

            <div className='aContainer'>
                <h3>Abilities</h3>
                <ul className='aBoxer'>
                    {
                        pokeData?.abilities.map(ability => (
                            <li key={ability.slot} className='aBox'>{ability.ability.name}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Atributes