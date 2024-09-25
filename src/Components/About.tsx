import React from 'react';
import SkillCardContainer from "./SkillCardContainer.tsx";
const About: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2>About me</h2>
                        <h5 className="small-width">I'm a Computer Science Student at Kennesaw State University.
                            Currently, I am an Associate Software Engineer at HighMatch.
                            My main interest is in creating full-stack web applications.</h5>
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