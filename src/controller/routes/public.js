import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react';
import HomePage from '../../view/screens/homepage';
import Style from '../../style';


function RoutesPage() {

    return (
        <>
            <Style />   
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </Router>
        </>
    )
}

export default RoutesPage;