import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProducts from '../components/main-page/all-products';
import AvailableNow from '../components/available-now/available-now';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/available" element={<AvailableNow />} />
        </Routes>
    );
}

export default AppRoutes;