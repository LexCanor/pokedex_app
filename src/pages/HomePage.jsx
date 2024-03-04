import React from 'react';
import { useRef } from 'react';
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setTrainerName(textInput.current.value.trim()));
        navigate('/pokedex');
    }

return (
    <div>
        <img src="../pokedex.png" alt="logo de pokédex" />
        <h1>¡Hola entrenador!</h1>
        <h2>Para poder comenzar, dame tu nombre</h2>
        <form onSubmit={handleSubmit} >
            <input type="text" ref={textInput} />
            <button>Comenzar</button>
        </form>
        <img src="../Border.PNG" alt="borde inferior" />
    </div>
)
}

export default HomePage;