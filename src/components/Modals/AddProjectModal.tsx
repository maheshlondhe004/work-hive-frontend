import React, { useState } from 'react';
import '../../styles/AddProjectModal.scss';

interface AddProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreateProject: (project: {
        name: string;
        description: string;
        startDate: string;
        endDate: string;
    }) => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({
    isOpen,
    onClose,
    onCreateProject,
}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = () => {
        onCreateProject({ name, description, startDate, endDate });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="add-project-modal">
            <div className="modal-content">
                <h2>Create New Project</h2>
                <input
                    type="text"
                    placeholder="Project Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <div className="actions">
                    <button onClick={onClose} className="cancel-button">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="create-button">
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProjectModal;
