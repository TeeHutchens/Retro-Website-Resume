'use client';

import React, { useState, useEffect, useRef } from "react";
import MacWindow from "./components/macWindow";
import ProjectsWindow from "./components/ProjectsWindow";
import ResumeWindow from "./components/ResumeWindow";
import WarningWindow from "./components/WarningWindow";
import PdfIcon from "./components/PdfIcon";
import LinkedInSvg from "./components/LinkedIn";
import GitHubSvg from "./components/GitHub";
import { GREETING, BIO } from "./constants/string";

const props = {
  greeting: GREETING,
  name: BIO
};

export default function Home() {
  const [showBio, setShowBio] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const hasLoaded = useRef(false);

  // Pop bio window open on load
  useEffect(() => {
    const t = setTimeout(() => {
      setShowBio(true);
      hasLoaded.current = true;
    }, 150);
    return () => clearTimeout(t);
  }, []);

  // Easter egg: warn when all windows closed
  useEffect(() => {
    if (!hasLoaded.current) return;
    if (!showBio && !showProjects && !showModal) {
      const t = setTimeout(() => setShowWarning(true), 500);
      return () => clearTimeout(t);
    }
  }, [showBio, showProjects, showModal]);

  return (
    <div className="container">
      <div className="windowPositioning">
        <div className="window-stack">
          <ProjectsWindow isfront={showProjects} onClose={() => setShowProjects(false)} />
          <MacWindow windowProps={props} isOpen={showBio} onClose={() => setShowBio(false)} />
        </div>

        <div className="dock">
          <PdfIcon onClick={() => setShowModal(true)} />
          <LinkedInSvg />
          <GitHubSvg />
          <svg onClick={() => setShowBio(v => !v)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" style={{ cursor: 'pointer', padding: '5px' }}>
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
          <svg onClick={() => setShowProjects(v => !v)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" style={{ cursor: 'pointer', padding: '5px' }}>
            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"/>
          </svg>
        </div>

        <ResumeWindow show={showModal} onClose={() => setShowModal(false)} />
        <WarningWindow
          isVisible={showWarning}
          onRestore={() => { setShowWarning(false); setShowBio(true); }}
          onDismiss={() => setShowWarning(false)}
        />
      </div>
    </div>
  );
}
