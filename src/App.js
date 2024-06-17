import React from 'react'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

function App() {
  <ProtectedRoute/>
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Login />
        </>
      ),
    },
    
    
    
    {
      path: "/Signup",
      element: (
        <>
          <Signup />
          
        </>
      ),
    },
    
    
      
    
   
  ]);
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;