import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MasterLayout from '../MasterLayout/MasterLayout';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

function App() {

  const router = createBrowserRouter([
    {path:"/", element: <MasterLayout/> , errorElement: <h1 className='alert alert-danger'>  not found route  </h1>, children:[
      {index: "home" ,element:<Home/>},
      {path: "about" ,element:<About/>},
      {path: "contact" ,element:<Contact/>},
    ] }
    
  ])


  return (
    <>
    <RouterProvider router={router}/>
    {/* <MasterLayout/> */}
    </>
  );
}

export default App;
