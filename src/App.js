import React, { useState } from 'react';
import './App.scss';
import { SectionGradient } from './sections/SectionGradient'
import { SectionGrids } from './sections/SectionGrids'

function App() {
  const [section, setSection] = useState("grids")
  return (
    <div className="App">
    <div className={`section-button ${section === 'gradient' ? 'selected' : ''}`} onClick={() => setSection("gradient")}>Gradient</div>
    <div className={`section-button ${section === 'grids' ? 'selected' : ''}`} onClick={() => setSection("grids")}>Grids</div>
      <header className="section">
        {section === "gradient" && 
          <SectionGradient />
        }
        {section === "grids" && 
          <SectionGrids />
        }
      </header>
    </div>
  );
}

export default App;
