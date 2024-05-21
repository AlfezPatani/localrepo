import { useTranslation } from 'react-i18next'
import './App.css'
import {Home, RootLayout,Catagory,Error,Product} from './components/index.js'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import QR from './components/QR/QR.jsx'

function App() {
  
  const route=createBrowserRouter(
    [
      {
        path:"/",
        element:<RootLayout/>,
        errorElement:<Error/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"search",
            element:<Catagory/>
          }
          ,
          {
            path:"product",
            element:<Catagory/>,
          }
          
        ]
      },
      {
        path:"product/:key",
        element:<Product/>,
        errorElement:<Error/>
      },
      {
        path:"/QR",
        element:<QR />
      }      

    ]
  )

  return (
    
    <RouterProvider router={route}/>
   
  )
}

export default App
