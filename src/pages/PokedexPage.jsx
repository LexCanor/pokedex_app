import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonName } from '../store/slices/pokemonName.slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedexPage/PokeCard';
import SelectType from '../components/pokedexPage/SelectType';
import './styles/pokedexPage.css'
import Pagination from '../components/pokedexPage/Pagination';

const PokedexPage = () => {
    const trainerName = useSelector(store => store.trainerName);
    const textInput = useRef()
    const pokemonName = useSelector(store => store.pokemonName)
    const dispatch = useDispatch()
    const [pokemons, getPokemons, getPerType] = useFetch()
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1500';
    const [selectValue, setSelectValue] = useState('allPokemons')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()))
        textInput.current.value = ''
    }

    useEffect(() => {
        if (selectValue==='allPokemons') {
            getPokemons(url)
        }else{
            getPerType(selectValue)
        }
}, [selectValue])
    

//console.log(selectValue)
console.log(pokemons)
//console.log(pokemonName)

/*------------Pagination--------*/
const [currentPage, setCurrentPage] = useState(1)
const [postPerPage] = useState(50)

const indexOfLastPoke = currentPage * postPerPage;
const indexOfFirstPoke = indexOfLastPoke - postPerPage;

const paginate = pageNumber => setCurrentPage(pageNumber);

/*------------------------------*/
const cbFilter = (element) => {
    if (pokemonName) {
        return pokemons?.results.filter(element => element.name.includes(pokemonName))
    }else{
        const currentPosts = pokemons?.results.slice(indexOfFirstPoke, indexOfLastPoke);
        return currentPosts
    };
}
return (
    <div className='pokedex'>
        <section className='pokeHeader'>
            <h3><span>Welcome {trainerName}!</span> Here you will find your favorite pokémon</h3>
            <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={textInput}/>
                <button >Find pokemon</button>
            </form>
    <SelectType
    setSelectValue = {setSelectValue}
    />
</div>


        </section>
        <section className='pokeContainer'>
            {
                cbFilter()?.map(poke => (
                    <PokeCard
                    key={poke.url}
                    url={poke.url}
                    />
                    ))
                }
        </section>
        <section className='pagContainer'>
                <Pagination postPerPage={postPerPage} totalPosts={pokemons?.results.length}
                paginate={paginate}
                />

        </section>
    </div>
  )
}

export default PokedexPage