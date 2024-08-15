import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const route = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/services",
      element:<Services/>
    },
    {
      path:"/solutions",
      element:<Solutions/>
    },
    {
      path:"/getStarted",
      element:<GetStarted/>
    },
  ]);

  return (
    <>
    <h1>Zishan Ansari</h1>
      <RouterProvider router={route}/>   
    </>
  )
}

export default App
