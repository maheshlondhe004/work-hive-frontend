import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from "./components/Auth/SignUp";
import Login from './pages/Auth/LoginPage'; // Existing login component
import SignUp1 from './components/Auth/Signup1.jsx';
import Home from './pages/Home'; // Import the Home page
import ProjectsPage from './pages/ProjectsPage';
import ActiveSprintPage from './pages/ActiveSprintPage';
import BacklogPage from './pages/BacklogPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp1 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />}>
                    {/* Child Routes */}
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route
                        path="active-sprint"
                        element={<ActiveSprintPage />}
                    />
                    <Route path="backlog" element={<BacklogPage />} />
                </Route>
                {/* Add other routes */}
            </Routes>
        </Router>
    );
};

export default App;
