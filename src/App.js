import React, { Fragment } from 'react';
import './App.css';
import Home from './Pages/HomePage/Home';
import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Contact from './Pages/ContactPage/Contact';
import LayOut from './Components/LayOus/LayOut';
import AboutUs from './Pages/AboutUs/AboutUs';
import Work from './Pages/WorkProcess/Work';
import Book from './Pages/Book/Book';
import Services from './Pages/Services/Services';
import Testimonial from './Pages/Testimonial/Testimonial';
import News from './Pages/News/News';
import Footer from './Components/Footer/Footer';
import HomeMain from './Pages/HomeMain/HomeMain';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<LayOut/>}>
    <Route index  element={<HomeMain />} />,
    <Route path='/ContactPage' element={<Contact/>}/> 

    </Route>

    

))
function App() {
  return (
    <Fragment>
        <RouterProvider router={routes}/>
    </Fragment>
    
  );
}

export default App;
