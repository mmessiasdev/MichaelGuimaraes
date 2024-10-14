import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react';
import HomePage from '../../view/screens/homepage';
import Style from '../../style';
import { CerfiticatesPage } from '../../view/screens/cerfiticates';


function RoutesPage() {

    return (
        <>
            <Style />
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/certificates' element={<CerfiticatesPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default RoutesPage;