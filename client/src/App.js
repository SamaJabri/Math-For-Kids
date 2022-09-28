import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Basics from './pages/Basics';
import Statistics from './pages/Statistics';


function App() {
    // const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));
    //
    // useEffect(() => {
    //     const loggedUser = localStorage.getItem("authenticated");
    //     if(loggedUser) {
    //         setAuthenticated(loggedUser);
    //     }
    // }, []);
    //
    // if(!authenticated) {
    //     return <Navigate to="/login" />
    // }
    // else {
    //     return (
    //         <div>
    //             <Routes>
    //                 <Route path="/choose-mode" element={<HomePage />}/>
    //             </Routes>
    //         </div>
    //     );
    // }

    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));

    if(!authenticated) {
        return <Login />
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={ <Login /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/home' element={ <HomePage /> } />
                    <Route path='/basics' element={ <Basics /> } />
                    <Route path='/statistics' element={ <Statistics /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
