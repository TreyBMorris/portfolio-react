import React from 'react';
import SkillCardContainer from "./SkillCardContainer.tsx";
const About: React.FC = () => {
    return (
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2>About me🤙</h2>
                        <p className="small-width">I'm a Computer Science Student at Kennesaw State University.
                            Currently, I am a Software Engineering Intern at Zebra Technologies. My main interest is in
                            creating full-stack web applications.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <h2>Current Skill Set⌨️</h2>
                        <SkillCardContainer/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;