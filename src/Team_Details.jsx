import React, { useEffect, useRef, useState } from "react";
import JAYMEEN from "./assets/img/team/jaymeen.jpg";
import DEV from "./assets/img/team/dev.jpg";
import AKSHAT from "./assets/img/team/akshat2.jpg";
import DEVANG from "./assets/img/team/devang.jpg";
import TIRTH from "./assets/img/team/tirth.jpg";
import RAJ from "./assets/img/team/raj.jpg";
import gsap from "gsap";

export default function Team_Details() {
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        if (selectedCard) {
            gsap.fromTo(
                ".drawer",
                {
                    x: "100%",
                },
                {
                    x: "0%",
                    duration: 0.8,
                    ease: "power4.out",
                }
            );

            gsap.fromTo(
                ".drawer-overlay",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.4,
                }
            );

            gsap.from(".drawer-avatar", {
                scale: 1.15,
                opacity: 0,
                duration: 1
            });

            gsap.from(".drawer-info > *", {
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8
            });
        }
    }, [selectedCard]);

    return (
        <>
            {selectedCard && (
                <>
                    <div
                        className="drawer-overlay"
                        onClick={() => setSelectedCard(null)}
                    />

                    <div className="drawer">

                        <div className="drawer-right">

                            <button
                                className="drawer-close"
                                onClick={() => setSelectedCard(null)}
                            >
                                ✕
                            </button>

                            <img
                                src={selectedCard.image}
                                alt={selectedCard.name}
                                className="drawer-avatar"
                            />

                            <div className="drawer-header">

                                <div className="drawer-info">

                                    <span className="drawer-role">
                                        {selectedCard.role}
                                    </span>

                                    <h1>
                                        {selectedCard.name}
                                    </h1>

                                    <p>
                                        {selectedCard.bio}
                                    </p>

                                </div>

                            </div>


                        </div>

                    </div>
                </>
            )}
            <section className="team">

                <div className="team-header">
                    <span>DEVELOPMENT TEAM</span>

                    <h1>
                        Meet the team behind the CODEXPLORE website.
                    </h1>

                    <p>
                        From design and development to content and deployment,
                        these six students collaborated to transform ideas into
                        a platform that represents our coding community.
                    </p>
                </div>

                <div className="team-cards primary">

                    <div className="team-member" onClick={() =>
                        setSelectedCard({
                            name: "Jaymeen Vaghela",
                            role: "Technical Architecture & Development",
                            image: JAYMEEN,
                            bio: "Leads the technical architecture and development of the CODEXPLOR website, overseeing project planning, implementation, system design, and coordination to ensure a high-quality and scalable platform.",
                            skills: ["React", "JavaScript", "Node.js"],
                            github: "github.com/yourname",
                            linkedin: "linkedin.com/in/yourname"
                        })
                    }>
                        <img src={JAYMEEN} alt="Team Member" />
                        <h3>Jaymeen Vaghela</h3>
                        <p>Technical Architecture & Development</p>
                    </div>

                    <div className="team-member" onClick={() =>
                        setSelectedCard({
                            name: "Dev Mavlankar",
                            role: "Data Management & Development",
                            image: DEV,
                            bio: "Contributes to website development while managing content organization, data structure, and information workflows to maintain accuracy, consistency, and efficient project execution.",
                            skills: ["React", "JavaScript", "Node.js"],
                            github: "github.com/yourname",
                            linkedin: "linkedin.com/in/yourname"
                        })
                    }>
                        <img src={DEV} alt="Team Member" />
                        <h3>Dev Mavlankar</h3>
                        <p>Data Management & Development</p>
                    </div>

                    <div className="team-member" onClick={() =>
                        setSelectedCard({
                            name: "Tirth Shah",
                            role: "Frontend Engineering",
                            image: TIRTH,
                            bio: "Responsible for frontend development, responsive design, and user interface implementation, ensuring a seamless experience across devices while maintaining visual consistency throughout the platform.",
                            skills: ["React", "JavaScript", "Node.js"],
                            github: "github.com/yourname",
                            linkedin: "linkedin.com/in/yourname"
                        })
                    }>
                        <img src={TIRTH} alt="Team Member" />
                        <h3>Tirth Shah</h3>
                        <p>Frontend Engineering</p>
                    </div>

                    <div className="team-member" onClick={() =>
                        setSelectedCard({
                            name: "Akshat Modi",
                            role: "User Experience & Interface Design",
                            image: AKSHAT,
                            bio: "Supports the design and user experience of the website by creating intuitive layouts, improving usability, and contributing creative solutions that enhance overall user engagement.",
                            skills: ["React", "JavaScript", "Node.js"],
                            github: "github.com/yourname",
                            linkedin: "linkedin.com/in/yourname"
                        })
                    }>
                        <img src={AKSHAT} alt="Team Member" />
                        <h3>Akshat Modi</h3>
                        <p>User Experience & Interface Design</p>
                    </div>


                    <div className="team-member" onClick={() =>
                        setSelectedCard({
                            name: "Raj Sangani",
                            role: "Brand Identity & Visual Design",
                            image: RAJ,
                            bio: "Contributes to the visual identity of the website through branding, graphic design, and creative assets that strengthen the platform's professional appearance and recognition.",
                            skills: ["React", "JavaScript", "Node.js"],
                            github: "github.com/yourname",
                            linkedin: "linkedin.com/in/yourname"
                        })
                    }>
                        <img src={RAJ} alt="Team Member" />
                        <h3>Raj Sangani</h3>
                        <p>Brand Identity & Visual Design</p>
                    </div>

                    <div className="team-member" onClick={() =>
                        setSelectedCard({
                            name: "Devang Patel",
                            role: "Operations & Technical Support",
                            image: DEVANG,
                            bio: "Assists with development activities while facilitating coordination between the project team and Coding Club operations, helping align technical requirements with organizational objectives.",
                            skills: ["React", "JavaScript", "Node.js"],
                            github: "github.com/yourname",
                            linkedin: "linkedin.com/in/yourname"
                        })
                    }>
                        <img src={DEVANG} alt="Team Member" />
                        <h3>Devang Patel</h3>
                        <p>Operations & Technical Support</p>
                    </div>

                </div>


            </section>
        </>
    );
}