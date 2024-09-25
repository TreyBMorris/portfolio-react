import React from 'react';
import GithubCard from "./GithubCard.tsx";
import '../Styles/Projects.css';
const Projects: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <br/>
                        <h2>Previous Projects🔨</h2>
                        <GithubCard username="TreyBMorris" repo="portfolio-react"/>
                        <GithubCard username="TreyBMorris" repo="CalculatorEngine"/>
                        <GithubCard username="TreyBMorris" repo="Calculator-Angular"/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Projects;
