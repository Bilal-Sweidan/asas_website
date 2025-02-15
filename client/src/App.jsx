import './App.css'

// react router
import { createBrowserRouter, RouterProvider, useLocation, Navigate } from "react-router"
import Index from './pages/Index'
import Product from './components/Product'
import Home from './components/Home'
import AllProducts from './components/AllProducts'
import ProductDescription from './components/ProductDescription'
import About from './components/About'

import { useContext } from 'react'
// pages
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// Context
import AuthContext from './context/Context'
import { LanguageContext, LanguageProvider } from './context/languageContext'

const NoUser = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext.UserContext)
  console.log(user)
  const location = useLocation()
  if (isLoading) {
    return (
      <>
        <p>
          loading..................
        </p>
      </>
    )
  }
  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />
  } else {
    return children
  }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "product/:id",
        element: <Product />,
        children: [
          {
            path: 'description',
            element: <ProductDescription />
          }
        ]
      },
      {
        path: "products",
        element: <AllProducts />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
  {
    path: "/sign-in",
    element: <NoUser><SignIn /></NoUser>
  },
  {
    path: "/sign-up",
    element: <NoUser><SignUp /></NoUser>
  }
])



function App() {
  return (
    <AuthContext.UserProvider >
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </AuthContext.UserProvider>
  )
}

export default App
