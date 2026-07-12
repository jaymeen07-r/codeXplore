import React from "react";

export default function Projects() {
    const projects = [
        {
            title: "TRINETRA",
            subtitle:
                "An intelligent emergency response platform designed to improve communication, coordination, and accessibility during critical situations."
        },
        {
            title: "TRAVEL-X",
            subtitle:
                "A modern travel planning platform that helps users discover destinations, organize trips, and manage travel experiences efficiently."
        },
        {
            title: "DESI KITCHEN",
            subtitle:
                "A digital food ordering solution focused on connecting customers with local kitchens through a seamless and user-friendly experience."
        }
    ];

    return (
        <section className="projects">

            <div className="projects-header">
                <span>PROJECTS</span>

                <h1>
                    Turning ideas into practical solutions through
                    collaborative development.
                </h1>

                <p>
                    Explore some of the projects developed by members
                    of CODEXPLOR while learning, experimenting, and
                    building real-world applications.
                </p>
            </div>

            <div className="projects-cards">

                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-card-header">
                            <span className="project-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h3>Explore More</h3>
                        </div>


                        <h2>{project.title}</h2>

                        <p>{project.subtitle}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}