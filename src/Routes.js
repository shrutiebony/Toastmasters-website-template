import React from 'react';
import { BrowserRouter, Route, Router, Routes, redirect, Navigate} from 'react-router-dom';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import FinalLandingPage from './LandingPageComponents/FinalLandingPage';

const WebRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<FinalLandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
        path="*"
      element={<Navigate to="/" replace={true} />}    />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRoutes;
