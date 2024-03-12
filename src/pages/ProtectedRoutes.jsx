import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import PokeHeader from '../components/protectedRoutes/PokeHeader'

const ProtectedRoutes = () => {
    const trainerName = useSelector(store => store.trainerName)

    if(trainerName.length > 2){
       return <div>
        <PokeHeader />
        <Outlet/>
        </div>
    } else {
        return <Navigate to={'/'}/>
    }
}

export default ProtectedRoutes