import {createRoot} from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/:country',
                element: <CountryDetails/>
            }
        ]
    }
])

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router}/>)