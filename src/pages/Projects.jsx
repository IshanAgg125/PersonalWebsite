import React, {useEffect, useRef} from "react";
import techQuestImage from '../assets/techQuest.png';
import geonavxImage from '../assets/geonavx.png';
import moneyImage from '../assets/money.png';
import "./projects.css"
function Projects() {

    const projectRefs = useRef([]); // create a ref to store references to each project container
    
    // Function to handle scroll events
    const handleScroll = () => {
        // Looping through each project container reference
        projectRefs.current.forEach((ref) => {
            if (!ref) return;
            const rect = ref.getBoundingClientRect(); // get the bounding rectangle of the element
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight; // check if the element is fully visible in the viewport
            ref.classList.toggle("active", inView); // Add or remove the "active" class based on visibility
        });
    };

    // useEffect to add and clean up scroll event listners
    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // Attach the scroll event listner
        handleScroll(); // trigger the scoll handler initially to set up the correct state
        return () => window.removeEventListener("scroll", handleScroll); // cleanup the event listner on component unmount
    }, []);

    // Creating project containers
    const projects = [
        {
            image: moneyImage,
            title: "AI Driven personal Finance Assistance",
            description: "Learn how to budget your money while also learning about investment startegies",
            technologies: ["JavaScript", "Python", "SQLite", "Flask", "Machine learning models: K-Cluster algorithms, linear regression model, Prophet", "Yahoo Finance API"],
        },

        {

            image: techQuestImage,
            title: "TechQuest",
            description: "Begin the quest to defeat the great dragon in a multiplaye battle.",
            technologies: ["Python", "MongoDB", "Flask", "OpenAI API's", "JavaScript", "Sockets", "React"],
        },
        {
            image: geonavxImage,
            title: "GeoNavX",
            description: "An ios mobile application which allows user to travel to any location at Temple University",
            technologies: ["Swift", "json", "mongoDB"],
        },
    ];

    return (
        <div className="projects"> {/* Main container for the projects */}
            <h1> This is a list of my most prominent projects!!</h1>
            <h2> Click here to access my GIT repository</h2>
            {projects.map((project, index) => ( // Loop through each project
                <div
                    className="project-container" // Add project container class
                    key={index} // Provide a unique key for each element
                    ref={(el) => (projectRefs.current[index] = el)} // Assign the DOM element to the corresponding ref
                >
                    <img src={project.image} alt={project.title} className="project-image" /> {/* Render the project image */}
                    <div className="project-overlay"> {/* Overlay container for text and technologies */}
                        <h1 className="project-title">{project.title}</h1> {/* Project title */}
                        <p className="project-description">{project.description}</p> {/* Project description */}
                        <h3 className="tech-used"> Technologies used </h3>
                        <ul className="project-technologies"> {/* List of technologies used */}
                            {project.technologies.map((tech, i) => (
                                
                                <li key={i}>{tech}</li> // Render each technology
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;
