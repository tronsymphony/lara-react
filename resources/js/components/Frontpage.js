import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";
import AboutPage from "./About";
import Profile from "./Profile";

function MyApp() {
    return (
      <>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<AboutPage /> } />
            <Route path="/profile" element={<Profile /> } />
        </Routes>
        </>
    );
}
export default MyApp;
if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
    , document.getElementById('app'));
}