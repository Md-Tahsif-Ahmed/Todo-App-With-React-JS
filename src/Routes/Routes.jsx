import {
    createBrowserRouter,
   
  } from "react-router-dom";
 
import App from "../Pages/Home/App";
import Home from "../Pages/Components/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/',
            element:<App></App>
        },
        
      ]
    },
  ]);

export default router;