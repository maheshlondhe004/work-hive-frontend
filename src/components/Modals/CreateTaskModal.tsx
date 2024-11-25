import React from 'react';
import '../../styles/modal.scss';

interface ModalProps {
    onClose: () => void;
}

const CreateTaskModal: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Create Task</h3>
                <form>
                    <label>Task Title:</label>
                    <input type="text" />
                    <label>Description:</label>
                    <textarea />
                    <label>Type:</label>
                    <select>
                        <option>Task</option>
                        <option>Story</option>
                        <option>Sub-task</option>
                    </select>
                    <button type="submit">Create</button>
                </form>
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default CreateTaskModal;
