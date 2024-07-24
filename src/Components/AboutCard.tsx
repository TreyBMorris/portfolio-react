import React from 'react';
import '../Styles/AboutCard.css'
interface AboutCardProps {
    title: string,
    image: string,
    alt: string | undefined
}
const AboutCard: React.FC<AboutCardProps> = ({ title, image, alt }) => {
    return (
        <div className="container mb-4">
            <div className="about-card">
                <h2>{title}</h2>
                <img src={image} alt={alt} style={{maxWidth: '50%', maxHeight: '50%'}}/>
            </div>
        </div>
    )
        ;
};
export default AboutCard;