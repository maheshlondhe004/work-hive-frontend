import React, { useState } from 'react';
import '../styles/home.scss';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import SettingsModal from '../components/Modals/SettingsModal';

const Home: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="home">
            {/* TopBar */}
            <TopBar
                onSidebarToggle={toggleSidebar}
                onCreateClick={() => alert('Open Task Creation Modal')}
                onSettingsClick={() => setIsSettingsModalOpen(true)}
            />

            <div className="layout">
                {/* Sidebar */}
                {isSidebarOpen && <Sidebar />}

                {/* Main Content */}
                <div className="content">
                    <h1>Welcome to Work Hive</h1>
                </div>
            </div>

            {/* Settings Modal */}
            {isSettingsModalOpen && (
                <SettingsModal onClose={() => setIsSettingsModalOpen(false)} />
            )}
        </div>
    );
};

export default Home;
