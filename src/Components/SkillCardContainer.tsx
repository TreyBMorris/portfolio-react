import React from 'react';
import AboutCard from './AboutCard';

const AboutCardContainer: React.FC = () => {


    return (
                <div className="container">
                    <div className="row">
                        <div className="d-flex flex-wrap">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                                <AboutCard title="Java"
                                           image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                                           alt='JavaLogo'/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                                <AboutCard title="Spring"
                                           image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
                                           alt='JavaSpring'/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                                <AboutCard title=".NET"
                                           image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
                                           alt='CSharpLogo'/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                                <AboutCard title="Angular"
                                           image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg'
                                           alt='AngularLogo'/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                                <AboutCard title="React"
                                           image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
                                           alt='ReactLogo'/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                                <AboutCard title="MongoDB"
                                           image='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                                           alt='MongoDBLogo'/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                                <AboutCard title="TypeScript"
                                           image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
                                           alt='TypeScript'/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
                                <AboutCard title="JavaScript"
                                           image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
                                           alt='JavaScript'/>
                            </div>
                        </div>
                    </div>
                </div>

    );
};

export default AboutCardContainer;
