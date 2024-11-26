import React from 'react';
import '../styles/ProjectCard.scss';

interface ProjectCardProps {
    name: string;
    description: string;
    stats: { tasks: number; team: number };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    name,
    description,
    stats = { tasks: 0, team: 0 },
}) => {
    return (
        <div className="project-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="stats">
                <span>Tasks: {stats.tasks}</span>
                <span>Team: {stats.team}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
