"use client"
import React from 'react'

import { useSelector,useDispatch } from 'react-redux'

import { RootState,AppDispatch } from '@/store/Store'

import { login,logout } from '@/store/features/AuthenticationSlice'

const page = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { user,isAuthenticated  } = useSelector((state:RootState)=>state.auth);

  const handleLogin = () =>{

    dispatch(

        login({

            id:"123",

            name:"John Doe",

            email:"john@example.com",

            token:"fakse-jwt-token",
        
        })

    )
  }


  const handleLogout = () =>{

    dispatch(logout());

  }

  return (
    <div className='w-full h-[100vh] text-center flex justify-center items-center'>

        { isAuthenticated ? (

            <div>

                <p>Welcome, {user?.name}</p>

                <button onClick={handleLogout}>LOGOUT</button>

            </div>

        ) : (
            <button onClick={handleLogin}>LOGIN</button>
        ) }

    </div>
  )
}

export default page