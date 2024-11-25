import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from "./components/Auth/SignUp";
import Login from './pages/Auth/LoginPage'; // Existing login component
import SignUp1 from './components/Auth/Signup1.jsx';
import Home from './pages/Home'; // Import the Home page

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp1 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                {/* Add other routes */}
            </Routes>
        </Router>
    );
};

export default App;
