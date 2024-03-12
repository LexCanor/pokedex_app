import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useNavigate } from 'react-router-dom'
import './styles/homePage.css'

const HomePage = () => {
    const textInput = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerName(textInput.current.value.trim()))
        navigate('/pokedex');
    }
  return (
    <div className='hpWrapper'>
        <img src="https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png" alt="" />

        <h1 className='hpTitle'>Welcome trainer!</h1>
        <h2>To begin, give us your name</h2>
        <br /><br />
        <form onSubmit={handleSubmit} className='hpForm'>
            <input type="text" ref={textInput} placeholder='Your name...' />
            <button>Catch them all!</button>
        </form>
        <footer className='hpBar'>
          <div className='hpDot'>
            <div className='hpDot2'></div>
          </div>
        </footer>
    </div>
  )
}

export default HomePage