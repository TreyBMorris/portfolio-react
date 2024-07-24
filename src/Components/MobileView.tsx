import React from 'react';
import '../Styles/MobileView.css'
import About from "./About.tsx";
import Trey from "./Trey.tsx";
import Projects from "./Projects.tsx";

const MobileView: React.FC =() => {
    return(
        <div className="scrollable-container">
            <Trey/>
            <About/>
            <Projects/>
        </div>
    )
}
export default MobileView;