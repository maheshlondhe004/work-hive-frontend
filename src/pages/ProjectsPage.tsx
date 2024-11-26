import React, { useState } from 'react';
import ProjectsGrid from '../components/ProjectsGrid';
import AddProjectModal from '../components/Modals/AddProjectModal';

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Ensure stats is always present
    const handleAddProject = (project: {
        name: string;
        description: string;
        startDate: string;
        endDate: string;
    }) => {
        // Default stats object
        const newProject = {
            ...project,
            stats: { tasks: 0, team: 0 }, // Default values for stats
        };
        setProjects([...projects, newProject]);
    };

    return (
        <div>
            <ProjectsGrid
                projects={projects}
                onAddProject={() => setIsModalOpen(true)}
            />
            <AddProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreateProject={handleAddProject}
            />
        </div>
    );
};

export default ProjectsPage;
