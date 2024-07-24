import React from 'react';
import '../Styles/MobileView.css'
import About from "./About.tsx";
import Trey from "./Trey.tsx";

const MobileView: React.FC =() => {
    return(
        <div className="scrollable-container">
            <Trey/>
            <About/>
        </div>
    )
}
export default MobileView;