import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.scss';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <NavLink
                to="/home/projects"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Projects
            </NavLink>
            <NavLink
                to="/home/active-sprint"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Active Sprint
            </NavLink>
            <NavLink
                to="/home/backlog"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Backlog
            </NavLink>
        </div>
    );
};

export default Sidebar;
