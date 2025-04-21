import React, { use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (!storedUser) {
      navigate("/login")
    } else {
      setUser(storedUser)
    }

  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }


  return (
    <div className='min-h-screen flex items-center justify-center bg-green-100 px-4'>
      <div className='bg-white p-6 rounded-xl shadow-md max-w-md w-full text-center'>
        <h1 className='text-2xl font-bold mb-4'>Bienvenido !</h1>
        {user && (
          <p className='text-gray-700 mb-6'>Hola, <strong>{user.nombre}</strong></p>
        )}
        

        <p className='text-gray-600 mb-4'>Esta es tu área de trabajo.</p>

        <button 
        onClick={handleLogout}
        className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
        >Cerrar Sesion
        </button>
      </div>
    </div>
  )
}

export default Dashboard