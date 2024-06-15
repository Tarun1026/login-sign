import React from 'react'
import Login from './Login'
import Signup from './Signup'
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