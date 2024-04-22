import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const {user} = useContext(AuthContext)
  return (

    user ? <Outlet : <Navigate to="/" /> 

 
  )
}

export default PrivateRouter
