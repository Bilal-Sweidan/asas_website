import './App.css'

// react router
import { createBrowserRouter, RouterProvider } from "react-router"
import Index from './pages/Index'
import Product from './components/Product'
import Home from './components/Home'
import AllProducts from './components/AllProducts'
import ProductDescription from './components/ProductDescription'
import About from './components/About'

// pages
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

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
        children : [
          {
            path : 'description',
            element : <ProductDescription />
          }
        ]
      },
      {
        path : "products",
        element : <AllProducts />
      },
      {
        path : "about",
        element : <About />
      }
    ]
  },
  {
    path : "/sign-in",
    element : <SignIn />
  },
  {
    path: "/sign-up",
    element : <SignUp />
  }
])



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
