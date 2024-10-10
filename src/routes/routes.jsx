import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from '../components/main-page/all-products';
import AvailableNow from '../components/available-now/available-now';


function AppRoutes() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<AllProducts />} />
                    <Route path="/AvailableNow" element={<AvailableNow />} />
                </Routes>
            </Router>
    );
}

export default AppRoutes;