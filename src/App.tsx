import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from "./components/Auth/SignUp";
import Login from './components/Auth/Login'; // Existing login component
import SignUp1 from './components/Auth/Signup1.jsx';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp1 />} />
                <Route path="/login" element={<Login />} />
                {/* Add other routes */}
            </Routes>
        </Router>
    );
};

export default App;
