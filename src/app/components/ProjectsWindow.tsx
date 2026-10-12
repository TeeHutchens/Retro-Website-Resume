import React, { useState } from 'react';
import './projectsWindow.css';
import { PROJECTS } from '../constants/projects';

interface ProjectsWindowProps {
    isfront: boolean;
    behind?: boolean;
    onClose: () => void;
    onFocus?: () => void;
}

const ProjectsWindow: React.FC<ProjectsWindowProps> = ({ isfront, behind, onClose, onFocus }) => {
    const [isMaximized, setIsMaximized] = useState(false);

    return (
    <div className={`mac-window projects-window${isfront ? ' is-front' : ''}${behind ? ' behind' : ''}${isMaximized ? ' maximized' : ''}`} onMouseDown={onFocus}>
        <div className="mac-title-bar">
            <div className="mac-close-button" onClick={onClose} style={{ cursor: 'pointer' }}></div>
            <div className="mac-minimize-button" onClick={onClose} style={{ cursor: 'pointer' }}></div>
            <div className="mac-maximize-button" onClick={() => setIsMaximized(v => !v)} style={{ cursor: 'pointer' }}></div>
            <span style={{ marginLeft: '8px', fontSize: '13px', color: '#555' }}>~/projects</span>
        </div>
        <div className="mac-content projects-content">
            {PROJECTS.map((p) => (
                <div key={p.name} className="project-card">
                    {p.image && <img src={p.image} alt="" className="project-image" />}
                    <strong>
                        {p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer">{p.name} ↗</a> : p.name}
                        {p.status && <span className={`status-chip status-${p.status.toLowerCase()}`}>{p.status}</span>}
                        {p.updated && <span className="project-updated">updated {p.updated}</span>}
                    </strong>
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
