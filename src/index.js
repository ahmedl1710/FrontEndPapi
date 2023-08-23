import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import About from "./pages/about";
import Notfound from "./pages/notfound"
import Homeafterlogin from './pages/homeafterlogin'
import Profil from './pages/profil'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<Notfound/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/home",
    element: <Homeafterlogin/>
  },
  {
    path: "/profil",
    element: <Profil/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
