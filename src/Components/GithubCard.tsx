import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface GitHubCardProps {
    username: string;
    repo: string;
}

interface RepoData {
    name: string;
    description: string;
    html_url: string;
    language: string;
}

const GitHubCard: React.FC<GitHubCardProps> = ({ username, repo }) => {
    const [repoData, setRepoData] = useState<RepoData | null>(null);

    useEffect(() => {
        const fetchRepoData = async () => {
            try {
                const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`);
                setRepoData(response.data);
            } catch (error) {
                console.error('Error fetching repo data', error);
            }
        };

        fetchRepoData();
    }, [username, repo]);

    if (!repoData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="github-card">
            <h2>{repoData.name}</h2>
            <h5>{repoData.language}</h5>
            <p>{repoData.description}</p>
            <a href={repoData.html_url} target="_blank" rel="noopener noreferrer">
                View Repository
            </a>
        </div>
    );
};

export default GitHubCard;