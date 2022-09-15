import React, {useEffect, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));

    useEffect(() => {
        const loggedUser = localStorage.getItem("authenticated");
        if(loggedUser) {
            setAuthenticated(loggedUser);
        }
    }, []);

    if(!authenticated) {
        return <Navigate to="/login" />
    }
    else {
        return (
            <div>
                <Routes>
                    <Route path="/home" element={<HomePage />}/>
                </Routes>
            </div>
        );
    }
}

export default App;
