import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from '../Components/Navbar';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Search } from '../pages/Search';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar><Home></Home></Navbar>}></Route>
                <Route path="/cart" element={<Navbar><Cart></Cart></Navbar>}></Route>
                <Route path="/search" element={<Navbar><Search></Search></Navbar>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
