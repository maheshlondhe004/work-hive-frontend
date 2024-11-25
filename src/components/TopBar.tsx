import React from 'react';
import '../styles/topbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface TopBarProps {
    onSidebarToggle: () => void;
    onCreateClick: () => void;
    onSettingsClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
    onSidebarToggle,
    onCreateClick,
    onSettingsClick,
}) => {
    return (
        <div className="top-bar">
            {/* Sidebar Toggle Icon */}
            <div className="icon" onClick={onSidebarToggle}>
                <MenuIcon />
            </div>

            {/* Logo */}
            <div className="logo">Work Hive</div>

            {/* Search Box */}
            <div className="search-box">
                <input type="text" placeholder="Search..." />
            </div>

            {/* Create Button */}
            <button className="create-button" onClick={onCreateClick}>
                Create
            </button>

            {/* Icons */}
            <div className="icons">
                <div className="icon">
                    <NotificationsIcon />
                </div>
                <div className="icon">
                    <HelpIcon />
                </div>
                <div className="icon" onClick={onSettingsClick}>
                    <SettingsIcon />
                </div>
                <div className="icon">
                    <AccountCircleIcon />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
