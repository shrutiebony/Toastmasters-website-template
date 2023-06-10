import React from 'react';
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import FinalLandingPage from './LandingPageComponents/FinalLandingPage';
const WebRoutes = () => {
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/Ghaziabad-Toastmasters-Club" element={<FinalLandingPage/>} />
          <Route path="/Ghaziabad-Toastmasters-Club/Home/" element={<Home/>} />
          <Route path='/Ghaziabad-Toastmasters-Club/Gallery' element={<Gallery/>}></Route>
          <Route path='/Ghaziabad-Toastmasters-Club/Contact' element={<Contact/>}></Route>

          </Routes>
      </BrowserRouter>
    );
  };
  
  export default WebRoutes;
  