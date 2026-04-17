import React, { useState } from 'react';
import './resumeWindow.css';

interface ResumeWindowProps {
    show: boolean;
    onClose: () => void;
}

const pdf = '/TaylorHutchensResume.pdf#navpanes=0';

const ResumeWindow: React.FC<ResumeWindowProps> = ({ show, onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    return (
        <div className={`mac-window resume-window${show ? ' visible' : ''}${isMaximized ? ' maximized' : ''}`}>
            <div className="mac-title-bar">
                <div className="mac-close-button" onClick={onClose} style={{ cursor: 'pointer' }}></div>
                <div className="mac-minimize-button" onClick={onClose} style={{ cursor: 'pointer' }}></div>
                <div className="mac-maximize-button" onClick={() => setIsMaximized(v => !v)} style={{ cursor: 'pointer' }}></div>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: '#555' }}>resume.pdf</span>
            </div>
            <div className="mac-content resume-content">
                <embed type="application/pdf" src={pdf} />
            </div>
        </div>
    );
};

export default ResumeWindow;
