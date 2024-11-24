import React, { useEffect, useState } from "react";
import { fetchProjects } from "../../services/api";

interface Project {
    id: string;
    name: string;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data : any= await fetchProjects();
            setProjects(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project) => (
                <div key={project.id}>{project.name}</div>
            ))}
        </div>
    );
};

export default Projects;
