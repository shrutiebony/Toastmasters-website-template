import React from 'react';
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import FinalLandingPage from './LandingPageComponents/FinalLandingPage';
const WebRoutes = () => {
    return (
      <BrowserRouter basename='Ghaziabad-Toastmasters-Club'>
      <Routes>
      <Route path={process.env.PUBLIC_URL + "/"} element={<FinalLandingPage/>} />
          <Route path={process.env.PUBLIC_URL + "/Home"} element={<Home/>} />
          <Route path={process.env.PUBLIC_URL + '/Gallery'} element={<Gallery/>}></Route>
          <Route path={process.env.PUBLIC_URL + '/Contact'} element={<Contact/>}></Route>
          </Routes>
      </BrowserRouter>
    );
  };
  
  export default WebRoutes;
  