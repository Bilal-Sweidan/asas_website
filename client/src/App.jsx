// css file
import './App.css'
// css font file
import './Fonts.css'
// css color file
import './color.css'
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
import AddingProduct from './components/Admin/AddingProduct'
import ResetPassword from './pages/ResetPassword'

// pages
import { AdminPage } from './pages/Admin/main'
import { SalesDash, CreateProduct } from './pages/Admin/dashboards'
import { Setting, Passwords , SocialMedia } from './pages/Admin/setting'

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
    console.log("block the user")
    return <Navigate to="/" state={{ from: location }} replace />
  } else {
    return children
  }
}
const AdminRole = ({ children }) => {
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
  if (user?.role == 'admin') {
    return children
  } else {
    return <p className='text-center text-uppercase h3'>access has been <span className='text-danger'>blocked</span> </p>
  }
}
const UserRole = () => {
  const { user, isLoading } = useContext(AuthContext.UserContext)
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
  if (user?.role === 'admin') {
    return <Navigate to='/admin' replace />
  } else {
    return <Index />
  }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserRole />,
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
        element: <AllProducts />,
      },
      {
        path: 'product/add',
        element: <AdminRole> <AddingProduct /></AdminRole>
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
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />
  },
  // admin routers
  {
    path: "/admin",
    element: <AdminRole><AdminPage /></AdminRole>,
    children: [
      {
        path: "dashboard",
        children: [
          {
            path: "sales",
            element: <SalesDash />
          }
        ]
      },
      {
        path: "products",
        children: [
          {
            path: "create-product",
            element: <CreateProduct />
          }
        ]
      },
      {
        path: "setting",
        element: <Setting />,
        children: [
          {
            path: "password",
            element: <Passwords />
          },
          {
            path : 'social-media',
            element : <SocialMedia />
          }
        ]
      }
    ]
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
