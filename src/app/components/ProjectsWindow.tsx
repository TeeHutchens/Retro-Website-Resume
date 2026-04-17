import React, { useState } from 'react';
import './projectsWindow.css';
import { PROJECTS } from '../constants/projects';

interface ProjectsWindowProps {
    isfront: boolean;
    onClose: () => void;
}

const ProjectsWindow: React.FC<ProjectsWindowProps> = ({ isfront, onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);

    return (
    <div className={`mac-window projects-window${isfront ? ' is-front' : ''}${isMaximized ? ' maximized' : ''}`}>
        <div className="mac-title-bar">
            <div className="mac-close-button" onClick={onClose} style={{ cursor: 'pointer' }}></div>
            <div className="mac-minimize-button" onClick={onClose} style={{ cursor: 'pointer' }}></div>
            <div className="mac-maximize-button" onClick={() => setIsMaximized(v => !v)} style={{ cursor: 'pointer' }}></div>
            <span style={{ marginLeft: '8px', fontSize: '13px', color: '#555' }}>~/projects</span>
        </div>
        <div className="mac-content projects-content">
            {PROJECTS.map((p) => (
                <div key={p.name} className="project-card">
                    <strong>{p.name}</strong>
                    <p>{p.description}</p>
                    <div>
                        {p.tags.map(t => (
                            <span key={t} className="tag-chip">{t}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default ProjectsWindow;
