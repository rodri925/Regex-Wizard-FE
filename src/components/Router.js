import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LandingPageBottom from './LandingPageBottom';
import Dashboard from './Dashboard';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/Training" />
      <Route path="/Missions" />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Scrolls" />
      <Route
        path="/"
        element={(
          <>
            <LandingPage />
            <LandingPageBottom />
          </>
)}
      />
    </Routes>
  </BrowserRouter>
);
export default Routing;
