import React from 'react';
import '../../styles/settingmodal.scss';

interface SettingsModalProps {
    onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content settings-modal">
                <h3>Settings</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="theme">Theme:</label>
                        <select id="theme">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="cerulean">Cerulean Blue</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notifications">Notifications:</label>
                        <input type="checkbox" id="notifications" />
                        <label htmlFor="notifications">
                            Enable Notifications
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="language">Language:</label>
                        <select id="language">
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>
                    <div className="modal-buttons">
                        <button
                            type="button"
                            onClick={onClose}
                            className="cancel-button"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="save-button">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingsModal;
