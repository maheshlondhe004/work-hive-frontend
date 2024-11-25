import React from 'react';
import '../styles/sidebar.scss';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="menu-item">Projects</div>
            <div className="menu-item">Active Sprints</div>
            <div className="menu-item">Backlog</div>
        </div>
    );
};

export default Sidebar;
