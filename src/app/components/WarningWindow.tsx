import React from 'react';
import './warningWindow.css';

interface WarningWindowProps {
    isVisible: boolean;
    onRestore: () => void;
    onDismiss: () => void;
}

const WarningWindow: React.FC<WarningWindowProps> = ({ isVisible, onRestore, onDismiss }) => (
    <div className={`mac-window warning-window${isVisible ? ' visible' : ''}`}>
        <div className="mac-title-bar">
            <div className="mac-close-button" onClick={onDismiss} style={{ cursor: 'pointer' }}></div>
            <div className="mac-minimize-button"></div>
            <div className="mac-maximize-button"></div>
        </div>
        <div className="mac-content warning-content">
            <span className="warning-icon">⚠️</span>
            <h3>You have deleted all of Taylor&apos;s work!</h3>
            <p>All windows have been closed. Did you mean to do that?</p>
            <div className="warning-actions">
                <button onClick={onDismiss}>Dismiss</button>
                <button className="primary" onClick={onRestore}>Restore</button>
            </div>
        </div>
    </div>
);

export default WarningWindow;
