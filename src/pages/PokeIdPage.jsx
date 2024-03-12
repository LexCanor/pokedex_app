import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import './styles/pokeIdPage.css'
import Atributes from '../components/pokeIdPage/Atributes'
import Stats from '../components/pokeIdPage/Stats'
import MoveSet from '../components/pokeIdPage/MoveSet'

const PokeIdPage = () => {
  const param = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`
  const [pokeData, getPokeData] = useFetch();

  useEffect(() => {
    getPokeData(url)
  }, [])


  //console.log(pokeData)
  return (
    <article className='idWrapper'>
      <div className={`${pokeData?.types[0].type.name} typeBox`}></div>
      <div className='idCard'>
        <img src={pokeData?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
        <h2 className={`${pokeData?.types[0].type.name} title id`}>#{pokeData?.id}</h2>
        <div className='divider'>
          <div className="linea">&nbsp;</div>
          <h3 className={`${pokeData?.types[0].type.name} title`}>{pokeData?.name.charAt(0).toUpperCase() + pokeData?.name.slice(1)}</h3>
          <div className="linea">&nbsp;</div>
        </div>
        <ul className='pokeSize'>
          <li>Weight <span>{pokeData?.weight}0g</span></li>
          <li>Height <span>{pokeData?.height}0cm</span></li>
        </ul>

        <div className='atributes'>
          <Atributes 
          pokeData={pokeData}
          />
        </div>

        <div className='stats'>
          <Stats 
          pokeData={pokeData}
          />
        </div>

      </div>

      <div className='idCard'>
        <div className='moveSet'>
          <MoveSet 
          pokeData={pokeData}
          />
        </div>
      </div>
    </article>
  )
}

export default PokeIdPage