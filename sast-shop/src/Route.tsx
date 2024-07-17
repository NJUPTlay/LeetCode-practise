import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/login';
import { Me } from './pages/me';
import { Home } from './pages/home';
import { ProductDetail } from './pages/product-detail';
import { OrderDetail } from './pages/order-detail';
import { OrderForm } from './pages/order-form';



function Routes() {
  const routes = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/me',
      element: <Me />
    },
    {
      path: '/product/:id',
      element:<ProductDetail/>
    },
    {
      path:'/order-detail',
      element: <OrderDetail/>
    },
    {
      path:'/order-form',
      element:<OrderForm/>
    }
  ])


  return <RouterProvider router={routes} />

}

export default Routes
