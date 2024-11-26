import React from 'react';
import '../styles/EmptyStateCard.scss';

interface EmptyStateCardProps {
    onAddProject: () => void;
}

const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ onAddProject }) => {
    return (
        <div className="empty-state-card" onClick={onAddProject}>
            <div className="add-icon">+</div>
            <h2>Add Project</h2>
            <p>
                Create your first project to start managing tasks and sprints.
            </p>
        </div>
    );
};

export default EmptyStateCard;
