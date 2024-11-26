import React from 'react';
import '../styles/ProjectsGrid.scss';
import ProjectCard from './ProjectCard';
import EmptyStateCard from './EmptyStateCard';

interface ProjectsGridProps {
    projects: Array<{
        name: string;
        description: string;
        stats: { tasks: number; team: number };
    }>;
    onAddProject: () => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
    projects,
    onAddProject,
}) => {
    return (
        <div className="projects-grid">
            {projects.length === 0 ? (
                <EmptyStateCard onAddProject={onAddProject} />
            ) : (
                projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        description={project.description}
                        stats={project.stats}
                    />
                ))
            )}
        </div>
    );
};

export default ProjectsGrid;
