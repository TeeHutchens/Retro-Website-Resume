import React, { useState } from 'react';
import './macWindow.css';
import AsciiName from './asciiArt';
import AsciiBanner from '../constants/banner';
import TypingBio from './TypingText';

interface WindowProps {
    greeting: string;
    name: string;
}

const MacWindow: React.FC<{ windowProps: WindowProps; isOpen?: boolean; onClose?: () => void }> = ({ windowProps, isOpen, onClose }) => {
    const [isMaximized, setIsMaximized] = useState(false);

    return (
        <div className={`mac-window bio-window${isOpen ? ' is-open' : ''}${isMaximized ? ' maximized' : ''}`}>
            <div className="mac-title-bar">
                <div className="mac-close-button" onClick={onClose} style={{ cursor: 'pointer' }}></div>
                <div className="mac-minimize-button" onClick={onClose} style={{ cursor: 'pointer' }}></div>
                <div className="mac-maximize-button" onClick={() => setIsMaximized(v => !v)} style={{ cursor: 'pointer' }}></div>
            </div>
            <div className="mac-content">
                <div className='asciiArtName'>
                    <AsciiBanner />
                    <AsciiName />
                    <AsciiBanner />
                </div>
                <div className='typingBio'>
                    <TypingBio />
                </div>
            </div>
        </div>
    );
};

export default MacWindow;
