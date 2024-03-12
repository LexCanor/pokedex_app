import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import { setPokemonName } from '../../store/slices/pokemonName.slice';
import { useDispatch } from 'react-redux';
import './styles/selectType.css'

const SelectType = ({setSelectValue}) => {
    const textSelect = useRef();
    const url = 'https://pokeapi.co/api/v2/type'
    const [ types, getTypes ] = useFetch();
    const dispatch = useDispatch()

    useEffect(() => {
        getTypes(url)
    }, [])
    
    //console.log(types)

    const handleChange = () => {
        setSelectValue(textSelect.current.value)
        dispatch(setPokemonName(''))
    }

  return (
    <select onChange={handleChange} ref={textSelect} className='selector'>
        <option value="allPokemons">allPokemons</option>
        {
            types?.results.map(type => (
                <option value={type.url}
                key={type.url} >{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType