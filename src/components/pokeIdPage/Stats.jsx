import React from 'react'
import './styles/stats.css'

const Stats = ({pokeData}) => {
   // console.log(pokeData)

  return (
    <div>
        <h2>Stats</h2>
        {
            pokeData?.stats.map(stat => (
                <div key={stat.stat.name} className='statWrapper'>
                    <div className='statInfo'>
                    <h3>{stat.stat.name.toUpperCase()}:</h3>
                    <span>{stat.base_stat}/150</span>
                    </div>
                    <div className='back'>
                        <div className='bar' style={{width:`${stat.base_stat/150*100}%`}}></div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Stats