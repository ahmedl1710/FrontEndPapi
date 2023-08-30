import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import UpdateProfil from './pages/updateProfile'
import CoursesInterest from './pages/coursesInterest';
import Management from './pages/management';
import Trendingcourses from './pages/trendingcourses';
import Sidebar from './pages/Dashboard/sidebar';
import Users from './pages/Dashboard/users';
import Courses from './pages/Dashboard/courses';
import Interests from './pages/Dashboard/interests';
import Roles from './pages/Dashboard/roles';
import Managecourses from './pages/managecourses';

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
  {
    path: "/updateProfil",
    element: <UpdateProfil/>
  },
  {
    path: "/interests/:selectedInterest",
    element: <CoursesInterest/>
  },
  {
    path: "/manage",
    element: <Management/>
  },
  {
    path: "/trendyCourses",
    element: <Trendingcourses/>
  },
  {
    path: "/dashboard",
    element: <Sidebar/>
  },
  {
    path: "/users",
    element: <Users/>
  },
  {
    path: "/courses",
    element: <Courses/>
  },
  {
    path: "/interests",
    element: <Interests/>
  },
  {
    path: "/roles",
    element: <Roles/>
  },
  {
    path: "/coursemanager",
    element: <Managecourses/>
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
